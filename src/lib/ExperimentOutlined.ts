import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('experiment-outlined')
export default class ExperimentOutlined extends AntdIcon {
  iconDefinition = ExperimentOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'experiment-outlined': ExperimentOutlined
  }
}
