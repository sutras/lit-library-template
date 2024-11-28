import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('codepen-circle-outlined')
export default class CodepenCircleOutlined extends AntdIcon {
  iconDefinition = CodepenCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'codepen-circle-outlined': CodepenCircleOutlined
  }
}
