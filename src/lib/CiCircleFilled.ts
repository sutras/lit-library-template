import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ci-circle-filled')
export default class CiCircleFilled extends AntdIcon {
  iconDefinition = CiCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ci-circle-filled': CiCircleFilled
  }
}
