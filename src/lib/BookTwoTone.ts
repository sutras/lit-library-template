import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('book-two-tone')
export default class BookTwoTone extends AntdIcon {
  iconDefinition = BookTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'book-two-tone': BookTwoTone
  }
}
