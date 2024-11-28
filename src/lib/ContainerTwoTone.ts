import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContainerTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('container-two-tone')
export default class ContainerTwoTone extends AntdIcon {
  iconDefinition = ContainerTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'container-two-tone': ContainerTwoTone
  }
}
