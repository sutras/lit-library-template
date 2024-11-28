import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dingding-outlined')
export default class DingdingOutlined extends AntdIcon {
  iconDefinition = DingdingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dingding-outlined': DingdingOutlined
  }
}
