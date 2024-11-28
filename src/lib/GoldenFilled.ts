import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('golden-filled')
export default class GoldenFilled extends AntdIcon {
  iconDefinition = GoldenFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'golden-filled': GoldenFilled
  }
}
