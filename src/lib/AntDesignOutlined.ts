import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ant-design-outlined')
export default class AntDesignOutlined extends AntdIcon {
  iconDefinition = AntDesignOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ant-design-outlined': AntDesignOutlined
  }
}
