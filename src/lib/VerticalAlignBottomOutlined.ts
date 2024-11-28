import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('vertical-align-bottom-outlined')
export default class VerticalAlignBottomOutlined extends AntdIcon {
  iconDefinition = VerticalAlignBottomOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'vertical-align-bottom-outlined': VerticalAlignBottomOutlined
  }
}
