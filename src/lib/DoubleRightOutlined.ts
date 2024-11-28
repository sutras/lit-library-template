import DoubleRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('double-right-outlined')
export default class DoubleRightOutlined extends AntdIcon {
  iconDefinition = DoubleRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'double-right-outlined': DoubleRightOutlined
  }
}
