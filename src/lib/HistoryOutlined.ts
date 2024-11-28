import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('history-outlined')
export default class HistoryOutlined extends AntdIcon {
  iconDefinition = HistoryOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'history-outlined': HistoryOutlined
  }
}
