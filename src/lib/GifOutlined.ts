import GifOutlinedSvg from '@ant-design/icons-svg/lib/asn/GifOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gif-outlined')
export default class GifOutlined extends AntdIcon {
  iconDefinition = GifOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gif-outlined': GifOutlined
  }
}
