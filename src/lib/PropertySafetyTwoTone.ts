import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('property-safety-two-tone')
export default class PropertySafetyTwoTone extends AntdIcon {
  iconDefinition = PropertySafetyTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'property-safety-two-tone': PropertySafetyTwoTone
  }
}
