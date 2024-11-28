import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ie-circle-filled')
export default class IeCircleFilled extends AntdIcon {
  iconDefinition = IeCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ie-circle-filled': IeCircleFilled
  }
}
