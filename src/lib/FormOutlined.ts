import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('form-outlined')
export default class FormOutlined extends AntdIcon {
  iconDefinition = FormOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'form-outlined': FormOutlined
  }
}
