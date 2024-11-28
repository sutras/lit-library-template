import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fullscreen-exit-outlined')
export default class FullscreenExitOutlined extends AntdIcon {
  iconDefinition = FullscreenExitOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fullscreen-exit-outlined': FullscreenExitOutlined
  }
}
