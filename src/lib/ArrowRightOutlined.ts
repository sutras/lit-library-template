import ArrowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('arrow-right-outlined')
export default class ArrowRightOutlined extends AntdIcon {
  iconDefinition = ArrowRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'arrow-right-outlined': ArrowRightOutlined
  }
}
