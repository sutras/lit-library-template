import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('book-filled')
export default class BookFilled extends AntdIcon {
  iconDefinition = BookFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'book-filled': BookFilled
  }
}
