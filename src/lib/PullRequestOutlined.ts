import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pull-request-outlined')
export default class PullRequestOutlined extends AntdIcon {
  iconDefinition = PullRequestOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pull-request-outlined': PullRequestOutlined
  }
}
