import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dislike-two-tone')
export default class DislikeTwoTone extends AntdIcon {
  iconDefinition = DislikeTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dislike-two-tone': DislikeTwoTone
  }
}
