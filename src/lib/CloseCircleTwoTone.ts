import CloseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-circle-two-tone')
export default class CloseCircleTwoTone extends AntdIcon {
  iconDefinition = CloseCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-circle-two-tone': CloseCircleTwoTone
  }
}
