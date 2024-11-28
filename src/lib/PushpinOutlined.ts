import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pushpin-outlined')
export default class PushpinOutlined extends AntdIcon {
  iconDefinition = PushpinOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pushpin-outlined': PushpinOutlined
  }
}
