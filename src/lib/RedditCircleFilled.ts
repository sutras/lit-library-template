import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reddit-circle-filled')
export default class RedditCircleFilled extends AntdIcon {
  iconDefinition = RedditCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reddit-circle-filled': RedditCircleFilled
  }
}
