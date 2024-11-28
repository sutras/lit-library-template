import LineHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineHeightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('line-height-outlined')
export default class LineHeightOutlined extends AntdIcon {
  iconDefinition = LineHeightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'line-height-outlined': LineHeightOutlined
  }
}
