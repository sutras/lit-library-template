import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('vertical-right-outlined')
export default class VerticalRightOutlined extends AntdIcon {
  iconDefinition = VerticalRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'vertical-right-outlined': VerticalRightOutlined
  }
}
