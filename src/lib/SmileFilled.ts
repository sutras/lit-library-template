import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('smile-filled')
export default class SmileFilled extends AntdIcon {
  iconDefinition = SmileFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'smile-filled': SmileFilled
  }
}
