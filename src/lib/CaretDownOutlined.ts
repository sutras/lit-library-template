import CaretDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-down-outlined')
export default class CaretDownOutlined extends AntdIcon {
  iconDefinition = CaretDownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-down-outlined': CaretDownOutlined
  }
}
