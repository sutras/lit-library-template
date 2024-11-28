import HolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/HolderOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('holder-outlined')
export default class HolderOutlined extends AntdIcon {
  iconDefinition = HolderOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'holder-outlined': HolderOutlined
  }
}
