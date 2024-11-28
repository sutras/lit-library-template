import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tag-outlined')
export default class TagOutlined extends AntdIcon {
  iconDefinition = TagOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tag-outlined': TagOutlined
  }
}
