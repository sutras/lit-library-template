import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('info-circle-outlined')
export default class InfoCircleOutlined extends AntdIcon {
  iconDefinition = InfoCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'info-circle-outlined': InfoCircleOutlined
  }
}
