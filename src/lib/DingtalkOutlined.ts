import DingtalkOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingtalkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dingtalk-outlined')
export default class DingtalkOutlined extends AntdIcon {
  iconDefinition = DingtalkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dingtalk-outlined': DingtalkOutlined
  }
}
