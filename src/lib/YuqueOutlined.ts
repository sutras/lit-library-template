import YuqueOutlinedSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('yuque-outlined')
export default class YuqueOutlined extends AntdIcon {
  iconDefinition = YuqueOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'yuque-outlined': YuqueOutlined
  }
}
