import PlaySquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('play-square-outlined')
export default class PlaySquareOutlined extends AntdIcon {
  iconDefinition = PlaySquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'play-square-outlined': PlaySquareOutlined
  }
}
