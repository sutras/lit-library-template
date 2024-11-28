import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('environment-two-tone')
export default class EnvironmentTwoTone extends AntdIcon {
  iconDefinition = EnvironmentTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'environment-two-tone': EnvironmentTwoTone
  }
}
