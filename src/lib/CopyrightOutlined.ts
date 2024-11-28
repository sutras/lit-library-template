import CopyrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copyright-outlined')
export default class CopyrightOutlined extends AntdIcon {
  iconDefinition = CopyrightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copyright-outlined': CopyrightOutlined
  }
}
