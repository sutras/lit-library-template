import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fullscreen-outlined')
export default class FullscreenOutlined extends AntdIcon {
  iconDefinition = FullscreenOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fullscreen-outlined': FullscreenOutlined
  }
}
