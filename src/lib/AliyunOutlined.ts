import AliyunOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('aliyun-outlined')
export default class AliyunOutlined extends AntdIcon {
  iconDefinition = AliyunOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'aliyun-outlined': AliyunOutlined
  }
}
