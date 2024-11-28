import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reddit-square-filled')
export default class RedditSquareFilled extends AntdIcon {
  iconDefinition = RedditSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reddit-square-filled': RedditSquareFilled
  }
}
