import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('slack-square-filled')
export default class SlackSquareFilled extends AntdIcon {
  iconDefinition = SlackSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'slack-square-filled': SlackSquareFilled
  }
}
