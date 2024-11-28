import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('slack-circle-filled')
export default class SlackCircleFilled extends AntdIcon {
  iconDefinition = SlackCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'slack-circle-filled': SlackCircleFilled
  }
}
