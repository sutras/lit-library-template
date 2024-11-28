import SpotifyFilledSvg from '@ant-design/icons-svg/lib/asn/SpotifyFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('spotify-filled')
export default class SpotifyFilled extends AntdIcon {
  iconDefinition = SpotifyFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'spotify-filled': SpotifyFilled
  }
}
