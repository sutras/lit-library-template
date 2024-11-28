import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('idcard-two-tone')
export default class IdcardTwoTone extends AntdIcon {
  iconDefinition = IdcardTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'idcard-two-tone': IdcardTwoTone
  }
}
