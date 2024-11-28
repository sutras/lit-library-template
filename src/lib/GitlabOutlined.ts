import GitlabOutlinedSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gitlab-outlined')
export default class GitlabOutlined extends AntdIcon {
  iconDefinition = GitlabOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gitlab-outlined': GitlabOutlined
  }
}
