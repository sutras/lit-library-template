import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('api-filled')
export default class ApiFilled extends AntdIcon {
  iconDefinition = ApiFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'api-filled': ApiFilled
  }
}
