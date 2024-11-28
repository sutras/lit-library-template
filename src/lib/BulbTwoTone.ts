import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bulb-two-tone')
export default class BulbTwoTone extends AntdIcon {
  iconDefinition = BulbTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bulb-two-tone': BulbTwoTone
  }
}
