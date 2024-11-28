import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('container-filled')
export default class ContainerFilled extends AntdIcon {
  iconDefinition = ContainerFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'container-filled': ContainerFilled
  }
}
