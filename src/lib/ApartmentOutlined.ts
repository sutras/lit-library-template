import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('apartment-outlined')
export default class ApartmentOutlined extends AntdIcon {
  iconDefinition = ApartmentOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'apartment-outlined': ApartmentOutlined
  }
}
