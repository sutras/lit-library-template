import MehTwoToneSvg from '@ant-design/icons-svg/lib/asn/MehTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('meh-two-tone')
export default class MehTwoTone extends AntdIcon {
  iconDefinition = MehTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'meh-two-tone': MehTwoTone
  }
}
