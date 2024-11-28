import AliwangwangFilledSvg from '@ant-design/icons-svg/lib/asn/AliwangwangFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('aliwangwang-filled')
export default class AliwangwangFilled extends AntdIcon {
  iconDefinition = AliwangwangFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'aliwangwang-filled': AliwangwangFilled
  }
}
