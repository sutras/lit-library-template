import AlignRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('align-right-outlined')
export default class AlignRightOutlined extends AntdIcon {
  iconDefinition = AlignRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'align-right-outlined': AlignRightOutlined
  }
}
