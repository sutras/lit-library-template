import SaveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('save-two-tone')
export default class SaveTwoTone extends AntdIcon {
  iconDefinition = SaveTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'save-two-tone': SaveTwoTone
  }
}
