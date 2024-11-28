import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('play-square-two-tone')
export default class PlaySquareTwoTone extends AntdIcon {
  iconDefinition = PlaySquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'play-square-two-tone': PlaySquareTwoTone
  }
}
