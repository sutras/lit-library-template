import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('carry-out-filled')
export default class CarryOutFilled extends AntdIcon {
  iconDefinition = CarryOutFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'carry-out-filled': CarryOutFilled
  }
}
