import RestOutlinedSvg from '@ant-design/icons-svg/lib/asn/RestOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rest-outlined')
export default class RestOutlined extends AntdIcon {
  iconDefinition = RestOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rest-outlined': RestOutlined
  }
}
