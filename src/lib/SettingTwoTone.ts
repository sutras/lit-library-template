import SettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('setting-two-tone')
export default class SettingTwoTone extends AntdIcon {
  iconDefinition = SettingTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'setting-two-tone': SettingTwoTone
  }
}
