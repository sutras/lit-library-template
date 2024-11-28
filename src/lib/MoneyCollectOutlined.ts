import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('money-collect-outlined')
export default class MoneyCollectOutlined extends AntdIcon {
  iconDefinition = MoneyCollectOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'money-collect-outlined': MoneyCollectOutlined
  }
}
