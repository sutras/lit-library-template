import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('html5-filled')
export default class Html5Filled extends AntdIcon {
  iconDefinition = Html5FilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'html5-filled': Html5Filled
  }
}
