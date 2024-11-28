import FireTwoToneSvg from '@ant-design/icons-svg/lib/asn/FireTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fire-two-tone')
export default class FireTwoTone extends AntdIcon {
  iconDefinition = FireTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fire-two-tone': FireTwoTone
  }
}
