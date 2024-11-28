import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tag-two-tone')
export default class TagTwoTone extends AntdIcon {
  iconDefinition = TagTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tag-two-tone': TagTwoTone
  }
}
