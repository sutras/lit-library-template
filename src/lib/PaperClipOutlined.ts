import PaperClipOutlinedSvg from '@ant-design/icons-svg/lib/asn/PaperClipOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('paper-clip-outlined')
export default class PaperClipOutlined extends AntdIcon {
  iconDefinition = PaperClipOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'paper-clip-outlined': PaperClipOutlined
  }
}
