import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('yahoo-outlined')
export default class YahooOutlined extends AntdIcon {
  iconDefinition = YahooOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'yahoo-outlined': YahooOutlined
  }
}
