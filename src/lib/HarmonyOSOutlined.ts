import HarmonyOSOutlinedSvg from '@ant-design/icons-svg/lib/asn/HarmonyOSOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('harmony-os-outlined')
export default class HarmonyOSOutlined extends AntdIcon {
  iconDefinition = HarmonyOSOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'harmony-os-outlined': HarmonyOSOutlined
  }
}
