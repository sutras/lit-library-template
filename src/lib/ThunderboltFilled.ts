import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('thunderbolt-filled')
export default class ThunderboltFilled extends AntdIcon {
  iconDefinition = ThunderboltFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'thunderbolt-filled': ThunderboltFilled
  }
}
