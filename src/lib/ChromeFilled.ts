import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('chrome-filled')
export default class ChromeFilled extends AntdIcon {
  iconDefinition = ChromeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-filled': ChromeFilled
  }
}
