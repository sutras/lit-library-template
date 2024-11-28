import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('info-circle-filled')
export default class InfoCircleFilled extends AntdIcon {
  iconDefinition = InfoCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'info-circle-filled': InfoCircleFilled
  }
}
