import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('issues-close-outlined')
export default class IssuesCloseOutlined extends AntdIcon {
  iconDefinition = IssuesCloseOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'issues-close-outlined': IssuesCloseOutlined
  }
}
