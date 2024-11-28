import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('radius-upright-outlined')
export default class RadiusUprightOutlined extends AntdIcon {
  iconDefinition = RadiusUprightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'radius-upright-outlined': RadiusUprightOutlined
  }
}
