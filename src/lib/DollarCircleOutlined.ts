import DollarCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dollar-circle-outlined')
export default class DollarCircleOutlined extends AntdIcon {
  iconDefinition = DollarCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dollar-circle-outlined': DollarCircleOutlined
  }
}
