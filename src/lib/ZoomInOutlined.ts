import ZoomInOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomInOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('zoom-in-outlined')
export default class ZoomInOutlined extends AntdIcon {
  iconDefinition = ZoomInOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'zoom-in-outlined': ZoomInOutlined
  }
}
