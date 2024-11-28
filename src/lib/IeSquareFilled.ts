import IeSquareFilledSvg from '@ant-design/icons-svg/lib/asn/IeSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ie-square-filled')
export default class IeSquareFilled extends AntdIcon {
  iconDefinition = IeSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ie-square-filled': IeSquareFilled
  }
}
