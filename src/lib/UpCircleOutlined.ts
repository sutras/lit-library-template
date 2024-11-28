import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-circle-outlined')
export default class UpCircleOutlined extends AntdIcon {
  iconDefinition = UpCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-circle-outlined': UpCircleOutlined
  }
}
