import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copyright-two-tone')
export default class CopyrightTwoTone extends AntdIcon {
  iconDefinition = CopyrightTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copyright-two-tone': CopyrightTwoTone
  }
}
