import FieldBinaryOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldBinaryOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('field-binary-outlined')
export default class FieldBinaryOutlined extends AntdIcon {
  iconDefinition = FieldBinaryOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'field-binary-outlined': FieldBinaryOutlined
  }
}
