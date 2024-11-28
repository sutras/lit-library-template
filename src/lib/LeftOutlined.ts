import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-outlined')
export default class LeftOutlined extends AntdIcon {
  iconDefinition = LeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-outlined': LeftOutlined
  }
}
