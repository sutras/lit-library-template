import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dropbox-outlined')
export default class DropboxOutlined extends AntdIcon {
  iconDefinition = DropboxOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dropbox-outlined': DropboxOutlined
  }
}
