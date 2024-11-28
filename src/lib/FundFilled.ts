import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fund-filled')
export default class FundFilled extends AntdIcon {
  iconDefinition = FundFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fund-filled': FundFilled
  }
}
