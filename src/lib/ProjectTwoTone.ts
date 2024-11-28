import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('project-two-tone')
export default class ProjectTwoTone extends AntdIcon {
  iconDefinition = ProjectTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'project-two-tone': ProjectTwoTone
  }
}
