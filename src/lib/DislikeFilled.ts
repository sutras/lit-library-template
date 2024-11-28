import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dislike-filled')
export default class DislikeFilled extends AntdIcon {
  iconDefinition = DislikeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dislike-filled': DislikeFilled
  }
}
