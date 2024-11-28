import MediumCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MediumCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medium-circle-filled')
export default class MediumCircleFilled extends AntdIcon {
  iconDefinition = MediumCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medium-circle-filled': MediumCircleFilled
  }
}
