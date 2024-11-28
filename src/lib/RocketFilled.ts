import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rocket-filled')
export default class RocketFilled extends AntdIcon {
  iconDefinition = RocketFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rocket-filled': RocketFilled
  }
}
