import QuestionOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('question-outlined')
export default class QuestionOutlined extends AntdIcon {
  iconDefinition = QuestionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'question-outlined': QuestionOutlined
  }
}
