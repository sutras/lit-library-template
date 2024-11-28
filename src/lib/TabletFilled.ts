import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tablet-filled')
export default class TabletFilled extends AntdIcon {
  iconDefinition = TabletFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tablet-filled': TabletFilled
  }
}
