import InfoCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/InfoCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('info-circle-two-tone')
export default class InfoCircleTwoTone extends AntdIcon {
  iconDefinition = InfoCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'info-circle-two-tone': InfoCircleTwoTone
  }
}
