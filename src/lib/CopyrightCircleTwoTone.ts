import CopyrightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copyright-circle-two-tone')
export default class CopyrightCircleTwoTone extends AntdIcon {
  iconDefinition = CopyrightCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copyright-circle-two-tone': CopyrightCircleTwoTone
  }
}
