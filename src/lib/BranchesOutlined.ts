import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('branches-outlined')
export default class BranchesOutlined extends AntdIcon {
  iconDefinition = BranchesOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'branches-outlined': BranchesOutlined
  }
}
