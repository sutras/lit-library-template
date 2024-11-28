import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reload-outlined')
export default class ReloadOutlined extends AntdIcon {
  iconDefinition = ReloadOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reload-outlined': ReloadOutlined
  }
}
