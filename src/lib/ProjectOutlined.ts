import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('project-outlined')
export default class ProjectOutlined extends AntdIcon {
  iconDefinition = ProjectOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'project-outlined': ProjectOutlined
  }
}
