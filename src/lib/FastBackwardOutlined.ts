import FastBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastBackwardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fast-backward-outlined')
export default class FastBackwardOutlined extends AntdIcon {
  iconDefinition = FastBackwardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fast-backward-outlined': FastBackwardOutlined
  }
}
