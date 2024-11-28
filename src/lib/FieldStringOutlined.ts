import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('field-string-outlined')
export default class FieldStringOutlined extends AntdIcon {
  iconDefinition = FieldStringOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'field-string-outlined': FieldStringOutlined
  }
}
