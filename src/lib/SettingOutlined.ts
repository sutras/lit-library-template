import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('setting-outlined')
export default class SettingOutlined extends AntdIcon {
  iconDefinition = SettingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'setting-outlined': SettingOutlined
  }
}
