import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('flag-outlined')
export default class FlagOutlined extends AntdIcon {
  iconDefinition = FlagOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'flag-outlined': FlagOutlined
  }
}
