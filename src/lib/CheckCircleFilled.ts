import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-circle-filled')
export default class CheckCircleFilled extends AntdIcon {
  iconDefinition = CheckCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-circle-filled': CheckCircleFilled
  }
}
