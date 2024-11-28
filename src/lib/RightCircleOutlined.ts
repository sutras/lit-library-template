import RightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-circle-outlined')
export default class RightCircleOutlined extends AntdIcon {
  iconDefinition = RightCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-circle-outlined': RightCircleOutlined
  }
}
