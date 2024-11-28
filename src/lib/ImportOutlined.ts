import ImportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('import-outlined')
export default class ImportOutlined extends AntdIcon {
  iconDefinition = ImportOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'import-outlined': ImportOutlined
  }
}
