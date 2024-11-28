import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('amazon-circle-filled')
export default class AmazonCircleFilled extends AntdIcon {
  iconDefinition = AmazonCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'amazon-circle-filled': AmazonCircleFilled
  }
}
