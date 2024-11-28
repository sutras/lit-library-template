import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('exclamation-circle-two-tone')
export default class ExclamationCircleTwoTone extends AntdIcon {
  iconDefinition = ExclamationCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'exclamation-circle-two-tone': ExclamationCircleTwoTone
  }
}
