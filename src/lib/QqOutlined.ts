import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('qq-outlined')
export default class QqOutlined extends AntdIcon {
  iconDefinition = QqOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'qq-outlined': QqOutlined
  }
}
