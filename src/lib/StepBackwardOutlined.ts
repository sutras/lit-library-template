import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('step-backward-outlined')
export default class StepBackwardOutlined extends AntdIcon {
  iconDefinition = StepBackwardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'step-backward-outlined': StepBackwardOutlined
  }
}
