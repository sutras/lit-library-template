import RotateLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rotate-left-outlined')
export default class RotateLeftOutlined extends AntdIcon {
  iconDefinition = RotateLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rotate-left-outlined': RotateLeftOutlined
  }
}
