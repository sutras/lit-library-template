import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('usergroup-delete-outlined')
export default class UsergroupDeleteOutlined extends AntdIcon {
  iconDefinition = UsergroupDeleteOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'usergroup-delete-outlined': UsergroupDeleteOutlined
  }
}
