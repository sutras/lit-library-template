import ToTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToTopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('to-top-outlined')
export default class ToTopOutlined extends AntdIcon {
  iconDefinition = ToTopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'to-top-outlined': ToTopOutlined
  }
}
