import TaobaoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('taobao-circle-filled')
export default class TaobaoCircleFilled extends AntdIcon {
  iconDefinition = TaobaoCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'taobao-circle-filled': TaobaoCircleFilled
  }
}
