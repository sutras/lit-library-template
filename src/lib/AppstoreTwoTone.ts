import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('appstore-two-tone')
export default class AppstoreTwoTone extends AntdIcon {
  iconDefinition = AppstoreTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'appstore-two-tone': AppstoreTwoTone
  }
}
