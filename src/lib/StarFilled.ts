import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('star-filled')
export default class StarFilled extends AntdIcon {
  iconDefinition = StarFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'star-filled': StarFilled
  }
}
