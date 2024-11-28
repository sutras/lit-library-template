import RotateRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rotate-right-outlined')
export default class RotateRightOutlined extends AntdIcon {
  iconDefinition = RotateRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rotate-right-outlined': RotateRightOutlined
  }
}
