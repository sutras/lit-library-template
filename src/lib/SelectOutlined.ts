import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('select-outlined')
export default class SelectOutlined extends AntdIcon {
  iconDefinition = SelectOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'select-outlined': SelectOutlined
  }
}
