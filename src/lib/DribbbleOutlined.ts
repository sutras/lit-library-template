import DribbbleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dribbble-outlined')
export default class DribbbleOutlined extends AntdIcon {
  iconDefinition = DribbbleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dribbble-outlined': DribbbleOutlined
  }
}
