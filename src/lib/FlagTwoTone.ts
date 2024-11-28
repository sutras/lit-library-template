import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('flag-two-tone')
export default class FlagTwoTone extends AntdIcon {
  iconDefinition = FlagTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'flag-two-tone': FlagTwoTone
  }
}
