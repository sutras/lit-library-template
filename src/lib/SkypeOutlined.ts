import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('skype-outlined')
export default class SkypeOutlined extends AntdIcon {
  iconDefinition = SkypeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'skype-outlined': SkypeOutlined
  }
}
