import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-circle-filled')
export default class RightCircleFilled extends AntdIcon {
  iconDefinition = RightCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-circle-filled': RightCircleFilled
  }
}
