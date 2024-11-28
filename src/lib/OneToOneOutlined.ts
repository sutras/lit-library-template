import OneToOneOutlinedSvg from '@ant-design/icons-svg/lib/asn/OneToOneOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('one-to-one-outlined')
export default class OneToOneOutlined extends AntdIcon {
  iconDefinition = OneToOneOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'one-to-one-outlined': OneToOneOutlined
  }
}
