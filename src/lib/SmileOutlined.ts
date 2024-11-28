import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('smile-outlined')
export default class SmileOutlined extends AntdIcon {
  iconDefinition = SmileOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'smile-outlined': SmileOutlined
  }
}
