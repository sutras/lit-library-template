import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('info-outlined')
export default class InfoOutlined extends AntdIcon {
  iconDefinition = InfoOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'info-outlined': InfoOutlined
  }
}
