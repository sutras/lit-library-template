import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ci-outlined')
export default class CiOutlined extends AntdIcon {
  iconDefinition = CiOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ci-outlined': CiOutlined
  }
}
