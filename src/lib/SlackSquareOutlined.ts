import SlackSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('slack-square-outlined')
export default class SlackSquareOutlined extends AntdIcon {
  iconDefinition = SlackSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'slack-square-outlined': SlackSquareOutlined
  }
}
