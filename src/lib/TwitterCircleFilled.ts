import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('twitter-circle-filled')
export default class TwitterCircleFilled extends AntdIcon {
  iconDefinition = TwitterCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'twitter-circle-filled': TwitterCircleFilled
  }
}
