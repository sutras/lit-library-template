import { LitElement } from 'lit'
import { html, unsafeStatic } from 'lit/static-html.js'
import { customElement } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import '@antd-wc/icons'
import * as icons from '@antd-wc/icons/icons'
import { kebabCase } from '@antd-wc/icons/helpers/utils'

const elements = Object.keys(icons).map((key) => kebabCase(key))

@customElement('demo-all-icons')
export class DemoAllIcons extends LitElement {
  render() {
    return html`
      ${map(
        elements,
        (tag) => html`
          <${unsafeStatic(tag)} />
        `,
      )}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-all-icons': DemoAllIcons
  }
}
