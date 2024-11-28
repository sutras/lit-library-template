import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('translation-outlined')
export default class TranslationOutlined extends AntdIcon {
  iconDefinition = TranslationOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'translation-outlined': TranslationOutlined
  }
}
