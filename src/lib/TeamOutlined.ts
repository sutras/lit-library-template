import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('team-outlined')
export default class TeamOutlined extends AntdIcon {
  iconDefinition = TeamOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'team-outlined': TeamOutlined
  }
}
