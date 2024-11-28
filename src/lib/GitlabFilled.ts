import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gitlab-filled')
export default class GitlabFilled extends AntdIcon {
  iconDefinition = GitlabFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gitlab-filled': GitlabFilled
  }
}
