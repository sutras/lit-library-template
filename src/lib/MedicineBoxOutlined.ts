import MedicineBoxOutlinedSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medicine-box-outlined')
export default class MedicineBoxOutlined extends AntdIcon {
  iconDefinition = MedicineBoxOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medicine-box-outlined': MedicineBoxOutlined
  }
}
