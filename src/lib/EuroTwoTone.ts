import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('euro-two-tone')
export default class EuroTwoTone extends AntdIcon {
  iconDefinition = EuroTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'euro-two-tone': EuroTwoTone
  }
}
