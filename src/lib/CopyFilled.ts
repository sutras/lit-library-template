import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copy-filled')
export default class CopyFilled extends AntdIcon {
  iconDefinition = CopyFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copy-filled': CopyFilled
  }
}
