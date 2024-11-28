import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('hdd-filled')
export default class HddFilled extends AntdIcon {
  iconDefinition = HddFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'hdd-filled': HddFilled
  }
}
