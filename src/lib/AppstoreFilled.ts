import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('appstore-filled')
export default class AppstoreFilled extends AntdIcon {
  iconDefinition = AppstoreFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'appstore-filled': AppstoreFilled
  }
}
