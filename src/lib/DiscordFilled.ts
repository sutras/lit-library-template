import DiscordFilledSvg from '@ant-design/icons-svg/lib/asn/DiscordFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('discord-filled')
export default class DiscordFilled extends AntdIcon {
  iconDefinition = DiscordFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'discord-filled': DiscordFilled
  }
}
