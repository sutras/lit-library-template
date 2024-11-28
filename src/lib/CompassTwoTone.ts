import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('compass-two-tone')
export default class CompassTwoTone extends AntdIcon {
  iconDefinition = CompassTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'compass-two-tone': CompassTwoTone
  }
}
