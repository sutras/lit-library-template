import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('solution-outlined')
export default class SolutionOutlined extends AntdIcon {
  iconDefinition = SolutionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'solution-outlined': SolutionOutlined
  }
}
