import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('heart-outlined')
export default class HeartOutlined extends AntdIcon {
  iconDefinition = HeartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'heart-outlined': HeartOutlined
  }
}
