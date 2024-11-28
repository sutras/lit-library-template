import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fast-forward-outlined')
export default class FastForwardOutlined extends AntdIcon {
  iconDefinition = FastForwardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fast-forward-outlined': FastForwardOutlined
  }
}
