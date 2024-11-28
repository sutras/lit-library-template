import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ci-circle-outlined')
export default class CiCircleOutlined extends AntdIcon {
  iconDefinition = CiCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ci-circle-outlined': CiCircleOutlined
  }
}
