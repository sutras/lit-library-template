import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rocket-two-tone')
export default class RocketTwoTone extends AntdIcon {
  iconDefinition = RocketTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rocket-two-tone': RocketTwoTone
  }
}
