import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tag-filled')
export default class TagFilled extends AntdIcon {
  iconDefinition = TagFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tag-filled': TagFilled
  }
}
