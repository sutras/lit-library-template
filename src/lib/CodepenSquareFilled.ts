import CodepenSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('codepen-square-filled')
export default class CodepenSquareFilled extends AntdIcon {
  iconDefinition = CodepenSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'codepen-square-filled': CodepenSquareFilled
  }
}
