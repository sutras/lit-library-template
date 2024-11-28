import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sketch-outlined')
export default class SketchOutlined extends AntdIcon {
  iconDefinition = SketchOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sketch-outlined': SketchOutlined
  }
}
