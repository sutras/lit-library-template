import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('api-two-tone')
export default class ApiTwoTone extends AntdIcon {
  iconDefinition = ApiTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'api-two-tone': ApiTwoTone
  }
}
