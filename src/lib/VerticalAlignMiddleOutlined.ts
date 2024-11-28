import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('vertical-align-middle-outlined')
export default class VerticalAlignMiddleOutlined extends AntdIcon {
  iconDefinition = VerticalAlignMiddleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'vertical-align-middle-outlined': VerticalAlignMiddleOutlined
  }
}
