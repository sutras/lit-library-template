import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('red-envelope-two-tone')
export default class RedEnvelopeTwoTone extends AntdIcon {
  iconDefinition = RedEnvelopeTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'red-envelope-two-tone': RedEnvelopeTwoTone
  }
}
