import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('red-envelope-outlined')
export default class RedEnvelopeOutlined extends AntdIcon {
  iconDefinition = RedEnvelopeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'red-envelope-outlined': RedEnvelopeOutlined
  }
}
