import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('italic-outlined')
export default class ItalicOutlined extends AntdIcon {
  iconDefinition = ItalicOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'italic-outlined': ItalicOutlined
  }
}
