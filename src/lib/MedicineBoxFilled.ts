import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medicine-box-filled')
export default class MedicineBoxFilled extends AntdIcon {
  iconDefinition = MedicineBoxFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medicine-box-filled': MedicineBoxFilled
  }
}
