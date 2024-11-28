import CaretLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-left-outlined')
export default class CaretLeftOutlined extends AntdIcon {
  iconDefinition = CaretLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-left-outlined': CaretLeftOutlined
  }
}
