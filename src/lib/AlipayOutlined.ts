import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alipay-outlined')
export default class AlipayOutlined extends AntdIcon {
  iconDefinition = AlipayOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alipay-outlined': AlipayOutlined
  }
}
