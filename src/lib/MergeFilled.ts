import MergeFilledSvg from '@ant-design/icons-svg/lib/asn/MergeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('merge-filled')
export default class MergeFilled extends AntdIcon {
  iconDefinition = MergeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'merge-filled': MergeFilled
  }
}
