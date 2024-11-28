import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('radius-bottomright-outlined')
export default class RadiusBottomrightOutlined extends AntdIcon {
  iconDefinition = RadiusBottomrightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'radius-bottomright-outlined': RadiusBottomrightOutlined
  }
}
