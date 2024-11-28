import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dribbble-circle-filled')
export default class DribbbleCircleFilled extends AntdIcon {
  iconDefinition = DribbbleCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dribbble-circle-filled': DribbbleCircleFilled
  }
}
