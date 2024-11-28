import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reddit-outlined')
export default class RedditOutlined extends AntdIcon {
  iconDefinition = RedditOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reddit-outlined': RedditOutlined
  }
}
