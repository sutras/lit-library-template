import PinterestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PinterestOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pinterest-outlined')
export default class PinterestOutlined extends AntdIcon {
  iconDefinition = PinterestOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pinterest-outlined': PinterestOutlined
  }
}
