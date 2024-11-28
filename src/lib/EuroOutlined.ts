import EuroOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('euro-outlined')
export default class EuroOutlined extends AntdIcon {
  iconDefinition = EuroOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'euro-outlined': EuroOutlined
  }
}
