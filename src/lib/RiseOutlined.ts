import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rise-outlined')
export default class RiseOutlined extends AntdIcon {
  iconDefinition = RiseOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rise-outlined': RiseOutlined
  }
}
