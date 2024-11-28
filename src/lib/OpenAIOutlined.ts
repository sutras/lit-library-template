import OpenAIOutlinedSvg from '@ant-design/icons-svg/lib/asn/OpenAIOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('open-ai-outlined')
export default class OpenAIOutlined extends AntdIcon {
  iconDefinition = OpenAIOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'open-ai-outlined': OpenAIOutlined
  }
}
