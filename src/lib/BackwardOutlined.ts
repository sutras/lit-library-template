import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('backward-outlined')
export default class BackwardOutlined extends AntdIcon {
  iconDefinition = BackwardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'backward-outlined': BackwardOutlined
  }
}
