import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('group-outlined')
export default class GroupOutlined extends AntdIcon {
  iconDefinition = GroupOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'group-outlined': GroupOutlined
  }
}
