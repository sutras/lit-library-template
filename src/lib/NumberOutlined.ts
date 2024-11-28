import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('number-outlined')
export default class NumberOutlined extends AntdIcon {
  iconDefinition = NumberOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'number-outlined': NumberOutlined
  }
}
