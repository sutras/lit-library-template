import PicLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pic-left-outlined')
export default class PicLeftOutlined extends AntdIcon {
  iconDefinition = PicLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pic-left-outlined': PicLeftOutlined
  }
}
