import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SnippetsTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('snippets-two-tone')
export default class SnippetsTwoTone extends AntdIcon {
  iconDefinition = SnippetsTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'snippets-two-tone': SnippetsTwoTone
  }
}
