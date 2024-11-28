import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('deployment-unit-outlined')
export default class DeploymentUnitOutlined extends AntdIcon {
  iconDefinition = DeploymentUnitOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'deployment-unit-outlined': DeploymentUnitOutlined
  }
}
