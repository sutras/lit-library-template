import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('snippets-filled')
export default class SnippetsFilled extends AntdIcon {
  iconDefinition = SnippetsFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'snippets-filled': SnippetsFilled
  }
}
