import PlusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-circle-outlined')
export default class PlusCircleOutlined extends AntdIcon {
  iconDefinition = PlusCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-circle-outlined': PlusCircleOutlined
  }
}
