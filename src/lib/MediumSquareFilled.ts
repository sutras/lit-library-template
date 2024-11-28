import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('medium-square-filled')
export default class MediumSquareFilled extends AntdIcon {
  iconDefinition = MediumSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'medium-square-filled': MediumSquareFilled
  }
}
