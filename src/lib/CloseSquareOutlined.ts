import CloseSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-square-outlined')
export default class CloseSquareOutlined extends AntdIcon {
  iconDefinition = CloseSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-square-outlined': CloseSquareOutlined
  }
}
