import SmileTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmileTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('smile-two-tone')
export default class SmileTwoTone extends AntdIcon {
  iconDefinition = SmileTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'smile-two-tone': SmileTwoTone
  }
}
