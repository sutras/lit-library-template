import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rocket-outlined')
export default class RocketOutlined extends AntdIcon {
  iconDefinition = RocketOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rocket-outlined': RocketOutlined
  }
}
