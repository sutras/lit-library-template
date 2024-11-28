import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('delivered-procedure-outlined')
export default class DeliveredProcedureOutlined extends AntdIcon {
  iconDefinition = DeliveredProcedureOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'delivered-procedure-outlined': DeliveredProcedureOutlined
  }
}
