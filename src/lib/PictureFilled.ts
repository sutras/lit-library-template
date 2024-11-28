import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('picture-filled')
export default class PictureFilled extends AntdIcon {
  iconDefinition = PictureFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'picture-filled': PictureFilled
  }
}
