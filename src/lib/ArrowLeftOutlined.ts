import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('arrow-left-outlined')
export default class ArrowLeftOutlined extends AntdIcon {
  iconDefinition = ArrowLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'arrow-left-outlined': ArrowLeftOutlined
  }
}
