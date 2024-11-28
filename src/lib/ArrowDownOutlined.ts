import ArrowDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('arrow-down-outlined')
export default class ArrowDownOutlined extends AntdIcon {
  iconDefinition = ArrowDownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'arrow-down-outlined': ArrowDownOutlined
  }
}
