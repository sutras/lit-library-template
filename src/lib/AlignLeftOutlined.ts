import AlignLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('align-left-outlined')
export default class AlignLeftOutlined extends AntdIcon {
  iconDefinition = AlignLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'align-left-outlined': AlignLeftOutlined
  }
}
