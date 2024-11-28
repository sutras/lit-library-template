import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('man-outlined')
export default class ManOutlined extends AntdIcon {
  iconDefinition = ManOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'man-outlined': ManOutlined
  }
}
