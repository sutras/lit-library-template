import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-right-outlined')
export default class CaretRightOutlined extends AntdIcon {
  iconDefinition = CaretRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-right-outlined': CaretRightOutlined
  }
}
