import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fund-outlined')
export default class FundOutlined extends AntdIcon {
  iconDefinition = FundOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fund-outlined': FundOutlined
  }
}
