import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('retweet-outlined')
export default class RetweetOutlined extends AntdIcon {
  iconDefinition = RetweetOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'retweet-outlined': RetweetOutlined
  }
}
