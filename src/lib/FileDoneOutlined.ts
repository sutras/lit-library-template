import FileDoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-done-outlined')
export default class FileDoneOutlined extends AntdIcon {
  iconDefinition = FileDoneOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-done-outlined': FileDoneOutlined
  }
}
