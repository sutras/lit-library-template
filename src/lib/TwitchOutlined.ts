import TwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitchOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('twitch-outlined')
export default class TwitchOutlined extends AntdIcon {
  iconDefinition = TwitchOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'twitch-outlined': TwitchOutlined
  }
}
