import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pound-circle-filled')
export default class PoundCircleFilled extends AntdIcon {
  iconDefinition = PoundCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pound-circle-filled': PoundCircleFilled
  }
}
