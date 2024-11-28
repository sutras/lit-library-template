import HomeOutlinedSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('home-outlined')
export default class HomeOutlined extends AntdIcon {
  iconDefinition = HomeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'home-outlined': HomeOutlined
  }
}
