import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('code-sandbox-circle-filled')
export default class CodeSandboxCircleFilled extends AntdIcon {
  iconDefinition = CodeSandboxCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'code-sandbox-circle-filled': CodeSandboxCircleFilled
  }
}
