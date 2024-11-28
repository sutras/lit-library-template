import AliwangwangOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliwangwangOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('aliwangwang-outlined')
export default class AliwangwangOutlined extends AntdIcon {
  iconDefinition = AliwangwangOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'aliwangwang-outlined': AliwangwangOutlined
  }
}
