import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dingtalk-square-filled')
export default class DingtalkSquareFilled extends AntdIcon {
  iconDefinition = DingtalkSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dingtalk-square-filled': DingtalkSquareFilled
  }
}
