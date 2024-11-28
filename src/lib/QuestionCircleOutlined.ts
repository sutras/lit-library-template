import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('question-circle-outlined')
export default class QuestionCircleOutlined extends AntdIcon {
  iconDefinition = QuestionCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'question-circle-outlined': QuestionCircleOutlined
  }
}
