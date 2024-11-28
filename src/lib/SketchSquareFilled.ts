import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sketch-square-filled')
export default class SketchSquareFilled extends AntdIcon {
  iconDefinition = SketchSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sketch-square-filled': SketchSquareFilled
  }
}
