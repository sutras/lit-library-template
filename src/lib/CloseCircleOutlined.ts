import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-circle-outlined')
export default class CloseCircleOutlined extends AntdIcon {
  iconDefinition = CloseCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-circle-outlined': CloseCircleOutlined
  }
}
