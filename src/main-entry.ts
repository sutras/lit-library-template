import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './demo/DemoBasic'
import './demo/DemoTwoToneColor'
import './demo/DemoAllIcons'
import './demo/DemoIconFont'
import './demo/DemoIconFontMulti'

@customElement('main-entry')
export class MainEntry extends LitElement {
  render() {
    return html`
      <main>
        <div class="flex">
          <section>
            <h4>基础使用</h4>
            <demo-basic></demo-basic>
          </section>
          <section>
            <h4>多色图标</h4>
            <demo-two-tone-color></demo-two-tone-color>
          </section>
        </div>
        <div class="flex">
          <section>
            <h4>使用 iconfont.cn</h4>
            <demo-icon-font></demo-icon-font>
          </section>
          <section>
            <h4>使用 iconfont.cn 的多个资源</h4>
            <demo-icon-font-multi></demo-icon-font-multi>
          </section>
        </div>
        <section>
          <h4>所有图标</h4>
          <demo-all-icons></demo-all-icons>
        </section>
      </main>
    `
  }

  static styles = css`
    main {
      display: flex;
      flex-direction: column;
      margin: 1rem;
      gap: 1rem;
    }
    section {
      padding: 1rem;
      border: 1px #ddd solid;
      border-radius: 0.25rem;
      flex: 1;
    }
    h4 {
      margin: 0 0 1rem;
    }
    .flex {
      display: flex;
      gap: 1rem;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'main-entry': MainEntry
  }
}
