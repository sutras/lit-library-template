import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('radius-bottomleft-outlined')
export default class RadiusBottomleftOutlined extends AntdIcon {
  iconDefinition = RadiusBottomleftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'radius-bottomleft-outlined': RadiusBottomleftOutlined
  }
}
