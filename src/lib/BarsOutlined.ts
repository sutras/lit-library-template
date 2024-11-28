import BarsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bars-outlined')
export default class BarsOutlined extends AntdIcon {
  iconDefinition = BarsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bars-outlined': BarsOutlined
  }
}
