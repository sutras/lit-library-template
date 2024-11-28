import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('idcard-filled')
export default class IdcardFilled extends AntdIcon {
  iconDefinition = IdcardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'idcard-filled': IdcardFilled
  }
}
