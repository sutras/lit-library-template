import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('code-sandbox-outlined')
export default class CodeSandboxOutlined extends AntdIcon {
  iconDefinition = CodeSandboxOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'code-sandbox-outlined': CodeSandboxOutlined
  }
}
