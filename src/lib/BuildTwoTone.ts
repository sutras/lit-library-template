import BuildTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('build-two-tone')
export default class BuildTwoTone extends AntdIcon {
  iconDefinition = BuildTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'build-two-tone': BuildTwoTone
  }
}
