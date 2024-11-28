import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('snippets-outlined')
export default class SnippetsOutlined extends AntdIcon {
  iconDefinition = SnippetsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'snippets-outlined': SnippetsOutlined
  }
}
