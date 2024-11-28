import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('block-outlined')
export default class BlockOutlined extends AntdIcon {
  iconDefinition = BlockOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'block-outlined': BlockOutlined
  }
}
