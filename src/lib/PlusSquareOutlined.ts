import PlusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-square-outlined')
export default class PlusSquareOutlined extends AntdIcon {
  iconDefinition = PlusSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-square-outlined': PlusSquareOutlined
  }
}
