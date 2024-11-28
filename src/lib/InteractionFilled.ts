import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('interaction-filled')
export default class InteractionFilled extends AntdIcon {
  iconDefinition = InteractionFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'interaction-filled': InteractionFilled
  }
}
