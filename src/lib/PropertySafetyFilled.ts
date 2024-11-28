import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('property-safety-filled')
export default class PropertySafetyFilled extends AntdIcon {
  iconDefinition = PropertySafetyFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'property-safety-filled': PropertySafetyFilled
  }
}
