import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dislike-outlined')
export default class DislikeOutlined extends AntdIcon {
  iconDefinition = DislikeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dislike-outlined': DislikeOutlined
  }
}
