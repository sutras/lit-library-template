import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('euro-circle-filled')
export default class EuroCircleFilled extends AntdIcon {
  iconDefinition = EuroCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'euro-circle-filled': EuroCircleFilled
  }
}
