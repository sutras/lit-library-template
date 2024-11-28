import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('code-filled')
export default class CodeFilled extends AntdIcon {
  iconDefinition = CodeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'code-filled': CodeFilled
  }
}
