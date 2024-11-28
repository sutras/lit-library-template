import TaobaoOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('taobao-outlined')
export default class TaobaoOutlined extends AntdIcon {
  iconDefinition = TaobaoOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'taobao-outlined': TaobaoOutlined
  }
}
