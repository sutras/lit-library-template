export default class ScriptLoader {
  cache = new Map<string, 'loading' | 'loaded' | 'error'>()

  async load(scriptUrls: string[]) {
    for (let i = 0; i < scriptUrls.length; i++) {
      const url = scriptUrls[i]

      if (this.cache.has(url)) {
        continue
      }

      const script = this.doLoad(url)

      this.cache.set(url, 'loading')

      await new Promise<void>((resolve, reject) => {
        script.onload = () => {
          this.cache.set(url, 'loaded')
          resolve()
        }
        script.onerror = (event) => {
          this.cache.set(url, 'error')
          script.remove()
          reject(event)
        }
      })
    }
  }

  doLoad(scriptUrl: string) {
    const script = document.createElement('script')
    script.setAttribute('src', scriptUrl)
    document.body.append(script)
    return script
  }
}
