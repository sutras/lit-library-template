import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-outlined')
export default class PlusOutlined extends AntdIcon {
  iconDefinition = PlusOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-outlined': PlusOutlined
  }
}
