import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fund-two-tone')
export default class FundTwoTone extends AntdIcon {
  iconDefinition = FundTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fund-two-tone': FundTwoTone
  }
}
