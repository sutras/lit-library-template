import PlayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlayCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('play-circle-outlined')
export default class PlayCircleOutlined extends AntdIcon {
  iconDefinition = PlayCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'play-circle-outlined': PlayCircleOutlined
  }
}
