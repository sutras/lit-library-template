import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('scissor-outlined')
export default class ScissorOutlined extends AntdIcon {
  iconDefinition = ScissorOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'scissor-outlined': ScissorOutlined
  }
}
