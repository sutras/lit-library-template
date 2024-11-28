import PoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pound-outlined')
export default class PoundOutlined extends AntdIcon {
  iconDefinition = PoundOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pound-outlined': PoundOutlined
  }
}
