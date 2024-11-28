import TwitterSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('twitter-square-filled')
export default class TwitterSquareFilled extends AntdIcon {
  iconDefinition = TwitterSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'twitter-square-filled': TwitterSquareFilled
  }
}
