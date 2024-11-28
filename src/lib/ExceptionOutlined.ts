import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('exception-outlined')
export default class ExceptionOutlined extends AntdIcon {
  iconDefinition = ExceptionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'exception-outlined': ExceptionOutlined
  }
}
