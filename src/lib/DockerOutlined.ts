import DockerOutlinedSvg from '@ant-design/icons-svg/lib/asn/DockerOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('docker-outlined')
export default class DockerOutlined extends AntdIcon {
  iconDefinition = DockerOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'docker-outlined': DockerOutlined
  }
}
