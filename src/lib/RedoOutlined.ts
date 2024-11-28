import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('redo-outlined')
export default class RedoOutlined extends AntdIcon {
  iconDefinition = RedoOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'redo-outlined': RedoOutlined
  }
}
