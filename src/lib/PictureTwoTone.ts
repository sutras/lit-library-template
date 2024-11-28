import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('picture-two-tone')
export default class PictureTwoTone extends AntdIcon {
  iconDefinition = PictureTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'picture-two-tone': PictureTwoTone
  }
}
