import UpOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-outlined')
export default class UpOutlined extends AntdIcon {
  iconDefinition = UpOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-outlined': UpOutlined
  }
}
