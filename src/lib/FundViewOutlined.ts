import FundViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundViewOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fund-view-outlined')
export default class FundViewOutlined extends AntdIcon {
  iconDefinition = FundViewOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fund-view-outlined': FundViewOutlined
  }
}
