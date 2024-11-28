import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('loading-outlined')
export default class LoadingOutlined extends AntdIcon {
  iconDefinition = LoadingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'loading-outlined': LoadingOutlined
  }
}
