import InteractionOutlinedSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('interaction-outlined')
export default class InteractionOutlined extends AntdIcon {
  iconDefinition = InteractionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'interaction-outlined': InteractionOutlined
  }
}
