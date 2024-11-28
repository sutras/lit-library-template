import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('read-outlined')
export default class ReadOutlined extends AntdIcon {
  iconDefinition = ReadOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'read-outlined': ReadOutlined
  }
}
