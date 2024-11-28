import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-circle-two-tone')
export default class CheckCircleTwoTone extends AntdIcon {
  iconDefinition = CheckCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-circle-two-tone': CheckCircleTwoTone
  }
}
