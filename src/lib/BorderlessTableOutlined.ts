import BorderlessTableOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderlessTableOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('borderless-table-outlined')
export default class BorderlessTableOutlined extends AntdIcon {
  iconDefinition = BorderlessTableOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'borderless-table-outlined': BorderlessTableOutlined
  }
}
