import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('field-time-outlined')
export default class FieldTimeOutlined extends AntdIcon {
  iconDefinition = FieldTimeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'field-time-outlined': FieldTimeOutlined
  }
}
