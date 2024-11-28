import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('percentage-outlined')
export default class PercentageOutlined extends AntdIcon {
  iconDefinition = PercentageOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'percentage-outlined': PercentageOutlined
  }
}
