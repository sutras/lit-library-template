import ShareAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShareAltOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('share-alt-outlined')
export default class ShareAltOutlined extends AntdIcon {
  iconDefinition = ShareAltOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'share-alt-outlined': ShareAltOutlined
  }
}
