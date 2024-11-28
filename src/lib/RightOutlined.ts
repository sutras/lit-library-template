import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-outlined')
export default class RightOutlined extends AntdIcon {
  iconDefinition = RightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-outlined': RightOutlined
  }
}
