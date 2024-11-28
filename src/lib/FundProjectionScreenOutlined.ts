import FundProjectionScreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fund-projection-screen-outlined')
export default class FundProjectionScreenOutlined extends AntdIcon {
  iconDefinition = FundProjectionScreenOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fund-projection-screen-outlined': FundProjectionScreenOutlined
  }
}
