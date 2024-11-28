import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('api-outlined')
export default class ApiOutlined extends AntdIcon {
  iconDefinition = ApiOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'api-outlined': ApiOutlined
  }
}
