import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-circle-filled')
export default class UpCircleFilled extends AntdIcon {
  iconDefinition = UpCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-circle-filled': UpCircleFilled
  }
}
