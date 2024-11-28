import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('field-number-outlined')
export default class FieldNumberOutlined extends AntdIcon {
  iconDefinition = FieldNumberOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'field-number-outlined': FieldNumberOutlined
  }
}
