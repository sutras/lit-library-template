import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tags-outlined')
export default class TagsOutlined extends AntdIcon {
  iconDefinition = TagsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tags-outlined': TagsOutlined
  }
}
