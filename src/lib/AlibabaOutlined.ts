import AlibabaOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlibabaOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alibaba-outlined')
export default class AlibabaOutlined extends AntdIcon {
  iconDefinition = AlibabaOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alibaba-outlined': AlibabaOutlined
  }
}
