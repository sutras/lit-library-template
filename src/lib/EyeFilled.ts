import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('eye-filled')
export default class EyeFilled extends AntdIcon {
  iconDefinition = EyeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'eye-filled': EyeFilled
  }
}
