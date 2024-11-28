import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('experiment-filled')
export default class ExperimentFilled extends AntdIcon {
  iconDefinition = ExperimentFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'experiment-filled': ExperimentFilled
  }
}
