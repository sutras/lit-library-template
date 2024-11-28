import SketchCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SketchCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sketch-circle-filled')
export default class SketchCircleFilled extends AntdIcon {
  iconDefinition = SketchCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sketch-circle-filled': SketchCircleFilled
  }
}
