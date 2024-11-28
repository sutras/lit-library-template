import CrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('crown-outlined')
export default class CrownOutlined extends AntdIcon {
  iconDefinition = CrownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'crown-outlined': CrownOutlined
  }
}
