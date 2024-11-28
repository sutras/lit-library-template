import MutedFilledSvg from '@ant-design/icons-svg/lib/asn/MutedFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('muted-filled')
export default class MutedFilled extends AntdIcon {
  iconDefinition = MutedFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'muted-filled': MutedFilled
  }
}
