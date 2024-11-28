import QqCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QqCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('qq-circle-filled')
export default class QqCircleFilled extends AntdIcon {
  iconDefinition = QqCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'qq-circle-filled': QqCircleFilled
  }
}
