import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tags-filled')
export default class TagsFilled extends AntdIcon {
  iconDefinition = TagsFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tags-filled': TagsFilled
  }
}
