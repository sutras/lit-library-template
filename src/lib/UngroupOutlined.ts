import UngroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/UngroupOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ungroup-outlined')
export default class UngroupOutlined extends AntdIcon {
  iconDefinition = UngroupOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ungroup-outlined': UngroupOutlined
  }
}
