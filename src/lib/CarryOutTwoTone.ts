import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('carry-out-two-tone')
export default class CarryOutTwoTone extends AntdIcon {
  iconDefinition = CarryOutTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'carry-out-two-tone': CarryOutTwoTone
  }
}
