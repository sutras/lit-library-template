import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('partition-outlined')
export default class PartitionOutlined extends AntdIcon {
  iconDefinition = PartitionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'partition-outlined': PartitionOutlined
  }
}
