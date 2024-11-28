import MutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/MutedOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('muted-outlined')
export default class MutedOutlined extends AntdIcon {
  iconDefinition = MutedOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'muted-outlined': MutedOutlined
  }
}
