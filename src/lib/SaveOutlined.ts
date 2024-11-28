import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('save-outlined')
export default class SaveOutlined extends AntdIcon {
  iconDefinition = SaveOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'save-outlined': SaveOutlined
  }
}
