import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('step-backward-filled')
export default class StepBackwardFilled extends AntdIcon {
  iconDefinition = StepBackwardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'step-backward-filled': StepBackwardFilled
  }
}
