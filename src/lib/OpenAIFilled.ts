import OpenAIFilledSvg from '@ant-design/icons-svg/lib/asn/OpenAIFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('open-ai-filled')
export default class OpenAIFilled extends AntdIcon {
  iconDefinition = OpenAIFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'open-ai-filled': OpenAIFilled
  }
}
