import GithubOutlinedSvg from '@ant-design/icons-svg/lib/asn/GithubOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('github-outlined')
export default class GithubOutlined extends AntdIcon {
  iconDefinition = GithubOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'github-outlined': GithubOutlined
  }
}
