import TaobaoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('taobao-circle-outlined')
export default class TaobaoCircleOutlined extends AntdIcon {
  iconDefinition = TaobaoCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'taobao-circle-outlined': TaobaoCircleOutlined
  }
}
