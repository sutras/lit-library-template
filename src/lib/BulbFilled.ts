import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bulb-filled')
export default class BulbFilled extends AntdIcon {
  iconDefinition = BulbFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bulb-filled': BulbFilled
  }
}
