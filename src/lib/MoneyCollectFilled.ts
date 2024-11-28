import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('money-collect-filled')
export default class MoneyCollectFilled extends AntdIcon {
  iconDefinition = MoneyCollectFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'money-collect-filled': MoneyCollectFilled
  }
}
