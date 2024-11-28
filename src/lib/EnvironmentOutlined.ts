import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('environment-outlined')
export default class EnvironmentOutlined extends AntdIcon {
  iconDefinition = EnvironmentOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'environment-outlined': EnvironmentOutlined
  }
}
