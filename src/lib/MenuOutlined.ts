import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('menu-outlined')
export default class MenuOutlined extends AntdIcon {
  iconDefinition = MenuOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'menu-outlined': MenuOutlined
  }
}
