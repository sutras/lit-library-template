import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tablet-outlined')
export default class TabletOutlined extends AntdIcon {
  iconDefinition = TabletOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tablet-outlined': TabletOutlined
  }
}
