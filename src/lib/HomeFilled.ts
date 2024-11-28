import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('home-filled')
export default class HomeFilled extends AntdIcon {
  iconDefinition = HomeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'home-filled': HomeFilled
  }
}
