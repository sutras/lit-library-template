import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('money-collect-two-tone')
export default class MoneyCollectTwoTone extends AntdIcon {
  iconDefinition = MoneyCollectTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'money-collect-two-tone': MoneyCollectTwoTone
  }
}
