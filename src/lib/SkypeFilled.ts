import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('skype-filled')
export default class SkypeFilled extends AntdIcon {
  iconDefinition = SkypeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'skype-filled': SkypeFilled
  }
}
