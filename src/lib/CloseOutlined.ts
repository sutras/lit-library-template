import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-outlined')
export default class CloseOutlined extends AntdIcon {
  iconDefinition = CloseOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-outlined': CloseOutlined
  }
}
