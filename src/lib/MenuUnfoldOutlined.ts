import MenuUnfoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('menu-unfold-outlined')
export default class MenuUnfoldOutlined extends AntdIcon {
  iconDefinition = MenuUnfoldOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'menu-unfold-outlined': MenuUnfoldOutlined
  }
}
