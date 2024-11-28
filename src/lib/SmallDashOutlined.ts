import SmallDashOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('small-dash-outlined')
export default class SmallDashOutlined extends AntdIcon {
  iconDefinition = SmallDashOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'small-dash-outlined': SmallDashOutlined
  }
}
