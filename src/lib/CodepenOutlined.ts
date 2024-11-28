import CodepenOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('codepen-outlined')
export default class CodepenOutlined extends AntdIcon {
  iconDefinition = CodepenOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'codepen-outlined': CodepenOutlined
  }
}
