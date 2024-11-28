import Loading3QuartersOutlinedSvg from '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('loading3-quarters-outlined')
export default class Loading3QuartersOutlined extends AntdIcon {
  iconDefinition = Loading3QuartersOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'loading3-quarters-outlined': Loading3QuartersOutlined
  }
}
