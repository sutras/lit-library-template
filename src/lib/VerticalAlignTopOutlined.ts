import VerticalAlignTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('vertical-align-top-outlined')
export default class VerticalAlignTopOutlined extends AntdIcon {
  iconDefinition = VerticalAlignTopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'vertical-align-top-outlined': VerticalAlignTopOutlined
  }
}
