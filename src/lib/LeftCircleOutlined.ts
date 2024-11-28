import LeftCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-circle-outlined')
export default class LeftCircleOutlined extends AntdIcon {
  iconDefinition = LeftCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-circle-outlined': LeftCircleOutlined
  }
}
