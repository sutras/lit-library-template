import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-down-filled')
export default class CaretDownFilled extends AntdIcon {
  iconDefinition = CaretDownFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-down-filled': CaretDownFilled
  }
}
