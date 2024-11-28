import ShrinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShrinkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shrink-outlined')
export default class ShrinkOutlined extends AntdIcon {
  iconDefinition = ShrinkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shrink-outlined': ShrinkOutlined
  }
}
