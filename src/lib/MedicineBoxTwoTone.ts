import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medicine-box-two-tone')
export default class MedicineBoxTwoTone extends AntdIcon {
  iconDefinition = MedicineBoxTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medicine-box-two-tone': MedicineBoxTwoTone
  }
}
