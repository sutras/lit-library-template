import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sliders-outlined')
export default class SlidersOutlined extends AntdIcon {
  iconDefinition = SlidersOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sliders-outlined': SlidersOutlined
  }
}
