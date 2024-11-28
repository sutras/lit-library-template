import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('picture-outlined')
export default class PictureOutlined extends AntdIcon {
  iconDefinition = PictureOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'picture-outlined': PictureOutlined
  }
}
