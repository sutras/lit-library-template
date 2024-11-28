import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-circle-filled')
export default class LeftCircleFilled extends AntdIcon {
  iconDefinition = LeftCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-circle-filled': LeftCircleFilled
  }
}
