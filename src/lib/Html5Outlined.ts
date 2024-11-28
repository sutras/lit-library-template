import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('html5-outlined')
export default class Html5Outlined extends AntdIcon {
  iconDefinition = Html5OutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'html5-outlined': Html5Outlined
  }
}
