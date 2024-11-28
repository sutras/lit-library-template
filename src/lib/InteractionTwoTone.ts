import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('interaction-two-tone')
export default class InteractionTwoTone extends AntdIcon {
  iconDefinition = InteractionTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'interaction-two-tone': InteractionTwoTone
  }
}
