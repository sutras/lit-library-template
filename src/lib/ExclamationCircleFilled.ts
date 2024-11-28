import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('exclamation-circle-filled')
export default class ExclamationCircleFilled extends AntdIcon {
  iconDefinition = ExclamationCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'exclamation-circle-filled': ExclamationCircleFilled
  }
}
