import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('project-filled')
export default class ProjectFilled extends AntdIcon {
  iconDefinition = ProjectFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'project-filled': ProjectFilled
  }
}
