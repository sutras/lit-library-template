import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('forward-outlined')
export default class ForwardOutlined extends AntdIcon {
  iconDefinition = ForwardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'forward-outlined': ForwardOutlined
  }
}
