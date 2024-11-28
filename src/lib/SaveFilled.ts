import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('save-filled')
export default class SaveFilled extends AntdIcon {
  iconDefinition = SaveFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'save-filled': SaveFilled
  }
}
