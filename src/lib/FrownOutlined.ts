import FrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FrownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('frown-outlined')
export default class FrownOutlined extends AntdIcon {
  iconDefinition = FrownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'frown-outlined': FrownOutlined
  }
}
