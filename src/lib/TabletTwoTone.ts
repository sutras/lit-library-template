import TabletTwoToneSvg from '@ant-design/icons-svg/lib/asn/TabletTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tablet-two-tone')
export default class TabletTwoTone extends AntdIcon {
  iconDefinition = TabletTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tablet-two-tone': TabletTwoTone
  }
}
