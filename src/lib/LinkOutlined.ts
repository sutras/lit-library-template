import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('link-outlined')
export default class LinkOutlined extends AntdIcon {
  iconDefinition = LinkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'link-outlined': LinkOutlined
  }
}
