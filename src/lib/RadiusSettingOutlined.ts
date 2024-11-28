import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('radius-setting-outlined')
export default class RadiusSettingOutlined extends AntdIcon {
  iconDefinition = RadiusSettingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'radius-setting-outlined': RadiusSettingOutlined
  }
}
