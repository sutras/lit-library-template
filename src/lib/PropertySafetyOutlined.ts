import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('property-safety-outlined')
export default class PropertySafetyOutlined extends AntdIcon {
  iconDefinition = PropertySafetyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'property-safety-outlined': PropertySafetyOutlined
  }
}
