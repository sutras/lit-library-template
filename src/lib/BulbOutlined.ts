import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bulb-outlined')
export default class BulbOutlined extends AntdIcon {
  iconDefinition = BulbOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bulb-outlined': BulbOutlined
  }
}
