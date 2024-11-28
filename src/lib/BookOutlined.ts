import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('book-outlined')
export default class BookOutlined extends AntdIcon {
  iconDefinition = BookOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'book-outlined': BookOutlined
  }
}
