import GoogleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('google-square-filled')
export default class GoogleSquareFilled extends AntdIcon {
  iconDefinition = GoogleSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'google-square-filled': GoogleSquareFilled
  }
}
