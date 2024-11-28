import SpotifyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SpotifyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('spotify-outlined')
export default class SpotifyOutlined extends AntdIcon {
  iconDefinition = SpotifyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'spotify-outlined': SpotifyOutlined
  }
}
