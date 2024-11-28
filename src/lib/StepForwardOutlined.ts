import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('step-forward-outlined')
export default class StepForwardOutlined extends AntdIcon {
  iconDefinition = StepForwardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'step-forward-outlined': StepForwardOutlined
  }
}
