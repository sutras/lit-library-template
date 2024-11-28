import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tags-two-tone')
export default class TagsTwoTone extends AntdIcon {
  iconDefinition = TagsTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tags-two-tone': TagsTwoTone
  }
}
