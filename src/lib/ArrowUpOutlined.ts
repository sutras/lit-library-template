import ArrowUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('arrow-up-outlined')
export default class ArrowUpOutlined extends AntdIcon {
  iconDefinition = ArrowUpOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'arrow-up-outlined': ArrowUpOutlined
  }
}
