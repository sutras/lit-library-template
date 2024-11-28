import EuroCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('euro-circle-two-tone')
export default class EuroCircleTwoTone extends AntdIcon {
  iconDefinition = EuroCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'euro-circle-two-tone': EuroCircleTwoTone
  }
}
