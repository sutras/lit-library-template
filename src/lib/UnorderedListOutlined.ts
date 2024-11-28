import UnorderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnorderedListOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('unordered-list-outlined')
export default class UnorderedListOutlined extends AntdIcon {
  iconDefinition = UnorderedListOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'unordered-list-outlined': UnorderedListOutlined
  }
}
