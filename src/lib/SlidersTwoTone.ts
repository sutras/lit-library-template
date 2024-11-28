import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sliders-two-tone')
export default class SlidersTwoTone extends AntdIcon {
  iconDefinition = SlidersTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sliders-two-tone': SlidersTwoTone
  }
}
