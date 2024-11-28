import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sliders-filled')
export default class SlidersFilled extends AntdIcon {
  iconDefinition = SlidersFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sliders-filled': SlidersFilled
  }
}
