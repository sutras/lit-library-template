import AlignCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignCenterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('align-center-outlined')
export default class AlignCenterOutlined extends AntdIcon {
  iconDefinition = AlignCenterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'align-center-outlined': AlignCenterOutlined
  }
}
