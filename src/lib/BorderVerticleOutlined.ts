import BorderVerticleOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderVerticleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-verticle-outlined')
export default class BorderVerticleOutlined extends AntdIcon {
  iconDefinition = BorderVerticleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-verticle-outlined': BorderVerticleOutlined
  }
}
