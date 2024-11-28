import CopyrightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copyright-circle-filled')
export default class CopyrightCircleFilled extends AntdIcon {
  iconDefinition = CopyrightCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copyright-circle-filled': CopyrightCircleFilled
  }
}
