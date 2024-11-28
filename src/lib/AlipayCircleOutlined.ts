import AlipayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alipay-circle-outlined')
export default class AlipayCircleOutlined extends AntdIcon {
  iconDefinition = AlipayCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alipay-circle-outlined': AlipayCircleOutlined
  }
}
