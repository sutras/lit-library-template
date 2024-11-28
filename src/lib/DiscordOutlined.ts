import DiscordOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiscordOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('discord-outlined')
export default class DiscordOutlined extends AntdIcon {
  iconDefinition = DiscordOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'discord-outlined': DiscordOutlined
  }
}
