import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-up-outlined')
export default class CaretUpOutlined extends AntdIcon {
  iconDefinition = CaretUpOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-up-outlined': CaretUpOutlined
  }
}
