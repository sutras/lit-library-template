import EuroCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('euro-circle-outlined')
export default class EuroCircleOutlined extends AntdIcon {
  iconDefinition = EuroCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'euro-circle-outlined': EuroCircleOutlined
  }
}
