import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medium-outlined')
export default class MediumOutlined extends AntdIcon {
  iconDefinition = MediumOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medium-outlined': MediumOutlined
  }
}
