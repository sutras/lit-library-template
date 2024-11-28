import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('play-circle-filled')
export default class PlayCircleFilled extends AntdIcon {
  iconDefinition = PlayCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'play-circle-filled': PlayCircleFilled
  }
}
