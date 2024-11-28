import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('layout-outlined')
export default class LayoutOutlined extends AntdIcon {
  iconDefinition = LayoutOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-outlined': LayoutOutlined
  }
}
