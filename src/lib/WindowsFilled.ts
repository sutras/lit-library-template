import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('windows-filled')
export default class WindowsFilled extends AntdIcon {
  iconDefinition = WindowsFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'windows-filled': WindowsFilled
  }
}
