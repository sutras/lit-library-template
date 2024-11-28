import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('html5-two-tone')
export default class Html5TwoTone extends AntdIcon {
  iconDefinition = Html5TwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'html5-two-tone': Html5TwoTone
  }
}
