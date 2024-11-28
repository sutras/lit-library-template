import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dollar-outlined')
export default class DollarOutlined extends AntdIcon {
  iconDefinition = DollarOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dollar-outlined': DollarOutlined
  }
}
