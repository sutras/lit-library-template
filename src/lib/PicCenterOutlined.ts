import PicCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pic-center-outlined')
export default class PicCenterOutlined extends AntdIcon {
  iconDefinition = PicCenterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pic-center-outlined': PicCenterOutlined
  }
}
