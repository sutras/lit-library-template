import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('strikethrough-outlined')
export default class StrikethroughOutlined extends AntdIcon {
  iconDefinition = StrikethroughOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'strikethrough-outlined': StrikethroughOutlined
  }
}
