import JavaScriptOutlinedSvg from '@ant-design/icons-svg/lib/asn/JavaScriptOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('java-script-outlined')
export default class JavaScriptOutlined extends AntdIcon {
  iconDefinition = JavaScriptOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'java-script-outlined': JavaScriptOutlined
  }
}
