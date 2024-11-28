import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('setting-filled')
export default class SettingFilled extends AntdIcon {
  iconDefinition = SettingFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'setting-filled': SettingFilled
  }
}
