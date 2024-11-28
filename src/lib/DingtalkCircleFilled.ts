import DingtalkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dingtalk-circle-filled')
export default class DingtalkCircleFilled extends AntdIcon {
  iconDefinition = DingtalkCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dingtalk-circle-filled': DingtalkCircleFilled
  }
}
