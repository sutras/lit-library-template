import CodepenCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('codepen-circle-filled')
export default class CodepenCircleFilled extends AntdIcon {
  iconDefinition = CodepenCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'codepen-circle-filled': CodepenCircleFilled
  }
}
