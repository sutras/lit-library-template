import CopyrightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copyright-circle-outlined')
export default class CopyrightCircleOutlined extends AntdIcon {
  iconDefinition = CopyrightCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copyright-circle-outlined': CopyrightCircleOutlined
  }
}
