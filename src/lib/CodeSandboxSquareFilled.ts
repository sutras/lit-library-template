import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('code-sandbox-square-filled')
export default class CodeSandboxSquareFilled extends AntdIcon {
  iconDefinition = CodeSandboxSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'code-sandbox-square-filled': CodeSandboxSquareFilled
  }
}
