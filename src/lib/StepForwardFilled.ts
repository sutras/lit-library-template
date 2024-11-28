import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('step-forward-filled')
export default class StepForwardFilled extends AntdIcon {
  iconDefinition = StepForwardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'step-forward-filled': StepForwardFilled
  }
}
