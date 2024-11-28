import SlackOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('slack-outlined')
export default class SlackOutlined extends AntdIcon {
  iconDefinition = SlackOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'slack-outlined': SlackOutlined
  }
}
