import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('experiment-two-tone')
export default class ExperimentTwoTone extends AntdIcon {
  iconDefinition = ExperimentTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'experiment-two-tone': ExperimentTwoTone
  }
}
