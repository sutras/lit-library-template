import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('meh-outlined')
export default class MehOutlined extends AntdIcon {
  iconDefinition = MehOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'meh-outlined': MehOutlined
  }
}
