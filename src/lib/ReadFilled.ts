import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('read-filled')
export default class ReadFilled extends AntdIcon {
  iconDefinition = ReadFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'read-filled': ReadFilled
  }
}
