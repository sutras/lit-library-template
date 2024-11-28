import RedEnvelopeFilledSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('red-envelope-filled')
export default class RedEnvelopeFilled extends AntdIcon {
  iconDefinition = RedEnvelopeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'red-envelope-filled': RedEnvelopeFilled
  }
}
