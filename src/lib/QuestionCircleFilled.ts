import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('question-circle-filled')
export default class QuestionCircleFilled extends AntdIcon {
  iconDefinition = QuestionCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'question-circle-filled': QuestionCircleFilled
  }
}
