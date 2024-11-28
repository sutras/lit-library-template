import { html, LitElement, PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { createRef, ref } from 'lit/directives/ref.js'
import ScriptLoader from '../helpers/ScriptLoader'
import Publisher from '../helpers/Publisher'
import { toArray } from '../helpers/utils'

export interface CustomIconOptions {
  scriptUrl?: string | string[]
}

const scriptLoader = new ScriptLoader()

class HelplessClass extends HTMLElement {
  type?: string
  spin?: boolean
  rotate?: number
}

void HelplessClass

export default function create(options: CustomIconOptions = {}) {
  const { scriptUrl } = options

  const publisher = new Publisher()

  if (
    scriptUrl &&
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function'
  ) {
    scriptLoader.load(toArray(scriptUrl)).then(() => {
      setTimeout(() => {
        publisher.publish()
      }, 50)
    })
  }

  function checkLoaded() {
    return toArray(scriptUrl).every(
      (url) => scriptLoader.cache.get(url) === 'loaded',
    )
  }

  class Iconfont extends LitElement {
    @property()
    type?: string

    @property({ type: Boolean })
    spin?: boolean

    @property({ type: Number })
    rotate?: number

    protected svg = createRef<SVGElement>()

    protected currentSymbol?: string

    protected setSvg(symbolId?: string) {
      if (symbolId && this.currentSymbol !== symbolId) {
        const svg = this.svg.value!
        const symbol = document.querySelector(`#${symbolId}`)
        if (symbol) {
          const viewBox = symbol.getAttribute('viewBox')
          if (viewBox) {
            svg.setAttribute('viewBox', viewBox)
          }
          svg.innerHTML = symbol.innerHTML
          this.currentSymbol = symbolId
        }
      }
    }

    protected handleLoaded = () => {
      this.setSvg(this.type)
    }

    connectedCallback() {
      super.connectedCallback()
      if (checkLoaded()) {
        this.handleLoaded()
      } else {
        publisher.subscribe(this.handleLoaded)
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      publisher.unsubscribe(this.handleLoaded)
    }

    willUpdate(changedProperties: PropertyValues<this>) {
      if (changedProperties.has('type')) {
        this.setSvg(this.type)
      }
    }

    render() {
      const prefixCls = 'anticon'

      const name = this.type as string | undefined

      return html`
        <span
          role="img"
          aria-label=${ifDefined(name)}
          class=${classMap({
            [prefixCls]: true,
            [`${prefixCls}-${name}`]: !!name,
            [`${prefixCls}-spin`]: !!this.spin,
          })}
          style=${styleMap({
            transform: this.rotate ? `rotate(${this.rotate}deg)` : null,
          })}
        >
          <svg
            ${ref(this.svg)}
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          ></svg>
        </span>
      `
    }
  }

  return Iconfont as unknown as typeof HelplessClass
}
