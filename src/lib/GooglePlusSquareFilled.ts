import GooglePlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('google-plus-square-filled')
export default class GooglePlusSquareFilled extends AntdIcon {
  iconDefinition = GooglePlusSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'google-plus-square-filled': GooglePlusSquareFilled
  }
}
