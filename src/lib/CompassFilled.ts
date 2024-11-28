import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('compass-filled')
export default class CompassFilled extends AntdIcon {
  iconDefinition = CompassFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'compass-filled': CompassFilled
  }
}
