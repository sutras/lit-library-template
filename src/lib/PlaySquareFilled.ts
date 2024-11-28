import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('play-square-filled')
export default class PlaySquareFilled extends AntdIcon {
  iconDefinition = PlaySquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'play-square-filled': PlaySquareFilled
  }
}
