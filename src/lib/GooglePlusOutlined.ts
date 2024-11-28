import GooglePlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/GooglePlusOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('google-plus-outlined')
export default class GooglePlusOutlined extends AntdIcon {
  iconDefinition = GooglePlusOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'google-plus-outlined': GooglePlusOutlined
  }
}
