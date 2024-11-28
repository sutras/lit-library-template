import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pound-circle-two-tone')
export default class PoundCircleTwoTone extends AntdIcon {
  iconDefinition = PoundCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pound-circle-two-tone': PoundCircleTwoTone
  }
}
