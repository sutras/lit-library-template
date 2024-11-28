import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-circle-filled')
export default class CloseCircleFilled extends AntdIcon {
  iconDefinition = CloseCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-circle-filled': CloseCircleFilled
  }
}
