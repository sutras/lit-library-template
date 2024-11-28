import MergeOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('merge-outlined')
export default class MergeOutlined extends AntdIcon {
  iconDefinition = MergeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'merge-outlined': MergeOutlined
  }
}
