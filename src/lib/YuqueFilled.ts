import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('yuque-filled')
export default class YuqueFilled extends AntdIcon {
  iconDefinition = YuqueFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'yuque-filled': YuqueFilled
  }
}
