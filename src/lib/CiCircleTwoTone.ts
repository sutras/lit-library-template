import CiCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ci-circle-two-tone')
export default class CiCircleTwoTone extends AntdIcon {
  iconDefinition = CiCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ci-circle-two-tone': CiCircleTwoTone
  }
}
