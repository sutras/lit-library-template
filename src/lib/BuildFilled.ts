import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('build-filled')
export default class BuildFilled extends AntdIcon {
  iconDefinition = BuildFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'build-filled': BuildFilled
  }
}
