import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('diff-outlined')
export default class DiffOutlined extends AntdIcon {
  iconDefinition = DiffOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'diff-outlined': DiffOutlined
  }
}
