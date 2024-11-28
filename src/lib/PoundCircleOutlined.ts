import PoundCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pound-circle-outlined')
export default class PoundCircleOutlined extends AntdIcon {
  iconDefinition = PoundCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pound-circle-outlined': PoundCircleOutlined
  }
}
