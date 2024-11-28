import ExportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExportOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('export-outlined')
export default class ExportOutlined extends AntdIcon {
  iconDefinition = ExportOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'export-outlined': ExportOutlined
  }
}
