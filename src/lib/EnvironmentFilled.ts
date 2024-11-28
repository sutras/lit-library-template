import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('environment-filled')
export default class EnvironmentFilled extends AntdIcon {
  iconDefinition = EnvironmentFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'environment-filled': EnvironmentFilled
  }
}
