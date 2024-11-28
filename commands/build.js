import fs from 'node:fs/promises'
import path from 'node:path'
import child_process from 'node:child_process'
import { glob } from 'glob'

const srcDir = path.resolve(process.cwd(), 'src/lib')
const tempDir = path.resolve(process.cwd(), 'temp')
const libDir = path.resolve(process.cwd(), 'lib')

async function compile() {
  const tsconfig = {
    include: [`${srcDir}/**/*`],
    compilerOptions: {
      target: 'ES2021',
      experimentalDecorators: true,
      useDefineForClassFields: false,
      module: 'ESNext',
      lib: ['ES2021', 'DOM', 'DOM.Iterable'],
      skipLibCheck: true,

      /* Bundler mode */
      moduleResolution: 'Bundler',
      isolatedModules: true,
      moduleDetection: 'force',

      /* Linting */
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
      noUncheckedSideEffectImports: true,

      // emit
      declaration: true,
      emitDeclarationOnly: false,
      outDir: libDir,
      importHelpers: true,
    },
  }

  const tsconfigFile = path.resolve(tempDir, 'tsconfig.json')

  await fs.mkdir(path.dirname(tsconfigFile), {
    recursive: true,
  })
  await fs.writeFile(tsconfigFile, JSON.stringify(tsconfig))

  await new Promise((resolve, reject) => {
    const subProcess = child_process.spawn('tsc', ['-p', tsconfigFile], {
      stdio: 'inherit',
    })
    subProcess.on('exit', (code) => {
      if (code) {
        reject()
      } else {
        resolve()
      }
    })
  })
}

async function copyOthers() {
  const files = await glob(srcDir + '/**/*', {
    ignore: {
      ignored(p) {
        return p.isDirectory() || /\.ts$/.test(p.fullpath())
      },
    },
  })

  await Promise.all(
    files.map(async (file) => {
      const src = path.resolve(process.cwd(), file)
      const dest = file.replace(srcDir, libDir)
      await fs.mkdir(path.dirname(dest), {
        recursive: true,
      })
      await fs.copyFile(src, dest)
    }),
  )

  const pkgSrc = path.resolve(process.cwd(), 'package.json')
  await fs.copyFile(pkgSrc, pkgSrc.replace(process.cwd(), libDir))

  const readmeSrc = path.resolve(process.cwd(), 'README.md')
  await fs.copyFile(readmeSrc, readmeSrc.replace(process.cwd(), libDir))

  const tsconfigSrc = path.resolve(process.cwd(), 'tsconfig.json')
  await fs.copyFile(tsconfigSrc, tsconfigSrc.replace(process.cwd(), libDir))
}

async function build() {
  await fs.rm(tempDir, {
    recursive: true,
    force: true,
  })
  await fs.rm(libDir, {
    recursive: true,
    force: true,
  })
  await compile()
  await copyOthers()
}

build()
