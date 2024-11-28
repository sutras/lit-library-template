import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rest-filled')
export default class RestFilled extends AntdIcon {
  iconDefinition = RestFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rest-filled': RestFilled
  }
}
