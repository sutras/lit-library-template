import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('menu-fold-outlined')
export default class MenuFoldOutlined extends AntdIcon {
  iconDefinition = MenuFoldOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'menu-fold-outlined': MenuFoldOutlined
  }
}
