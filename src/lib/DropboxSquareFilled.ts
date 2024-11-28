import DropboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dropbox-square-filled')
export default class DropboxSquareFilled extends AntdIcon {
  iconDefinition = DropboxSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dropbox-square-filled': DropboxSquareFilled
  }
}
