import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('usergroup-add-outlined')
export default class UsergroupAddOutlined extends AntdIcon {
  iconDefinition = UsergroupAddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'usergroup-add-outlined': UsergroupAddOutlined
  }
}
