import BuildOutlinedSvg from '@ant-design/icons-svg/lib/asn/BuildOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('build-outlined')
export default class BuildOutlined extends AntdIcon {
  iconDefinition = BuildOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'build-outlined': BuildOutlined
  }
}
