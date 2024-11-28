import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('behance-circle-filled')
export default class BehanceCircleFilled extends AntdIcon {
  iconDefinition = BehanceCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'behance-circle-filled': BehanceCircleFilled
  }
}
