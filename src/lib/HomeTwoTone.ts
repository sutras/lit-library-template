import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('home-two-tone')
export default class HomeTwoTone extends AntdIcon {
  iconDefinition = HomeTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'home-two-tone': HomeTwoTone
  }
}
