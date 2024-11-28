import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ci-two-tone')
export default class CiTwoTone extends AntdIcon {
  iconDefinition = CiTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ci-two-tone': CiTwoTone
  }
}
