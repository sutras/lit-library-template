import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('comment-outlined')
export default class CommentOutlined extends AntdIcon {
  iconDefinition = CommentOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'comment-outlined': CommentOutlined
  }
}
