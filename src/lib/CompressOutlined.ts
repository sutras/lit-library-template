import CompressOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompressOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('compress-outlined')
export default class CompressOutlined extends AntdIcon {
  iconDefinition = CompressOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'compress-outlined': CompressOutlined
  }
}
