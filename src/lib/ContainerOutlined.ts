import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('container-outlined')
export default class ContainerOutlined extends AntdIcon {
  iconDefinition = ContainerOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'container-outlined': ContainerOutlined
  }
}
