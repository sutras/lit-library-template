import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('code-two-tone')
export default class CodeTwoTone extends AntdIcon {
  iconDefinition = CodeTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'code-two-tone': CodeTwoTone
  }
}
