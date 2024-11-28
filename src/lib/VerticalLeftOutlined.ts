import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('vertical-left-outlined')
export default class VerticalLeftOutlined extends AntdIcon {
  iconDefinition = VerticalLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'vertical-left-outlined': VerticalLeftOutlined
  }
}
