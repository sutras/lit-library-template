import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medium-workmark-outlined')
export default class MediumWorkmarkOutlined extends AntdIcon {
  iconDefinition = MediumWorkmarkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medium-workmark-outlined': MediumWorkmarkOutlined
  }
}
