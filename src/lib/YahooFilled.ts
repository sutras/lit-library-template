import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('yahoo-filled')
export default class YahooFilled extends AntdIcon {
  iconDefinition = YahooFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'yahoo-filled': YahooFilled
  }
}
