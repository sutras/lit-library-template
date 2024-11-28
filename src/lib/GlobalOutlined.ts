import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('global-outlined')
export default class GlobalOutlined extends AntdIcon {
  iconDefinition = GlobalOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'global-outlined': GlobalOutlined
  }
}
