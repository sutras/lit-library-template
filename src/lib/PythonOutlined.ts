import PythonOutlinedSvg from '@ant-design/icons-svg/lib/asn/PythonOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('python-outlined')
export default class PythonOutlined extends AntdIcon {
  iconDefinition = PythonOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'python-outlined': PythonOutlined
  }
}
