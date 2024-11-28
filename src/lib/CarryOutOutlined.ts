import CarryOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('carry-out-outlined')
export default class CarryOutOutlined extends AntdIcon {
  iconDefinition = CarryOutOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'carry-out-outlined': CarryOutOutlined
  }
}
