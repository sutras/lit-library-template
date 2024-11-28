import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rest-two-tone')
export default class RestTwoTone extends AntdIcon {
  iconDefinition = RestTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rest-two-tone': RestTwoTone
  }
}
