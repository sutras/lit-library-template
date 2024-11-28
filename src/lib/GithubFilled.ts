import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('github-filled')
export default class GithubFilled extends AntdIcon {
  iconDefinition = GithubFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'github-filled': GithubFilled
  }
}
