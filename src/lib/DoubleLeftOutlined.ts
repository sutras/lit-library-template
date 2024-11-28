import DoubleLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('double-left-outlined')
export default class DoubleLeftOutlined extends AntdIcon {
  iconDefinition = DoubleLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'double-left-outlined': DoubleLeftOutlined
  }
}
