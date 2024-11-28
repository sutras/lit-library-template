import LineOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('line-outlined')
export default class LineOutlined extends AntdIcon {
  iconDefinition = LineOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'line-outlined': LineOutlined
  }
}
