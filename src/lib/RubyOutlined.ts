import RubyOutlinedSvg from '@ant-design/icons-svg/lib/asn/RubyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ruby-outlined')
export default class RubyOutlined extends AntdIcon {
  iconDefinition = RubyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ruby-outlined': RubyOutlined
  }
}
