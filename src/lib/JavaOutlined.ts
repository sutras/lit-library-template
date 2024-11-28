import JavaOutlinedSvg from '@ant-design/icons-svg/lib/asn/JavaOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('java-outlined')
export default class JavaOutlined extends AntdIcon {
  iconDefinition = JavaOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'java-outlined': JavaOutlined
  }
}
