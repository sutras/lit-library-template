import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ie-outlined')
export default class IeOutlined extends AntdIcon {
  iconDefinition = IeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ie-outlined': IeOutlined
  }
}
