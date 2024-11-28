import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('android-outlined')
export default class AndroidOutlined extends AntdIcon {
  iconDefinition = AndroidOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'android-outlined': AndroidOutlined
  }
}
