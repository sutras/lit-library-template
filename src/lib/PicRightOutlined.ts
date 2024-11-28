import PicRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pic-right-outlined')
export default class PicRightOutlined extends AntdIcon {
  iconDefinition = PicRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pic-right-outlined': PicRightOutlined
  }
}
