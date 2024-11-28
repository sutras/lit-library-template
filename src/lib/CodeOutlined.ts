import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('code-outlined')
export default class CodeOutlined extends AntdIcon {
  iconDefinition = CodeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'code-outlined': CodeOutlined
  }
}
