import TwitchFilledSvg from '@ant-design/icons-svg/lib/asn/TwitchFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('twitch-filled')
export default class TwitchFilled extends AntdIcon {
  iconDefinition = TwitchFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'twitch-filled': TwitchFilled
  }
}
