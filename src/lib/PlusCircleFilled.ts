import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-circle-filled')
export default class PlusCircleFilled extends AntdIcon {
  iconDefinition = PlusCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-circle-filled': PlusCircleFilled
  }
}
