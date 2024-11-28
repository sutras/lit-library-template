import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('function-outlined')
export default class FunctionOutlined extends AntdIcon {
  iconDefinition = FunctionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'function-outlined': FunctionOutlined
  }
}
