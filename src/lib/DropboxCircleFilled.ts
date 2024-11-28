import DropboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dropbox-circle-filled')
export default class DropboxCircleFilled extends AntdIcon {
  iconDefinition = DropboxCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dropbox-circle-filled': DropboxCircleFilled
  }
}
