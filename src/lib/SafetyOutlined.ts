import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('safety-outlined')
export default class SafetyOutlined extends AntdIcon {
  iconDefinition = SafetyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'safety-outlined': SafetyOutlined
  }
}
