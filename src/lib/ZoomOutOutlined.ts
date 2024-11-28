import ZoomOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomOutOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('zoom-out-outlined')
export default class ZoomOutOutlined extends AntdIcon {
  iconDefinition = ZoomOutOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'zoom-out-outlined': ZoomOutOutlined
  }
}
