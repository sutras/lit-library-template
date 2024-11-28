import AmazonSquareFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('amazon-square-filled')
export default class AmazonSquareFilled extends AntdIcon {
  iconDefinition = AmazonSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'amazon-square-filled': AmazonSquareFilled
  }
}
