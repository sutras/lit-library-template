import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('arrows-alt-outlined')
export default class ArrowsAltOutlined extends AntdIcon {
  iconDefinition = ArrowsAltOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'arrows-alt-outlined': ArrowsAltOutlined
  }
}
