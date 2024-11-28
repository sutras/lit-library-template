import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('question-circle-two-tone')
export default class QuestionCircleTwoTone extends AntdIcon {
  iconDefinition = QuestionCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'question-circle-two-tone': QuestionCircleTwoTone
  }
}
