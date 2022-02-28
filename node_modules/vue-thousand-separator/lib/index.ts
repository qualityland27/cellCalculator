import SeparatorDirective from './thousand-saparator'
import _Vue, { PluginFunction, PluginObject } from 'vue'

declare global {
  interface Window {
    Vue: _Vue | undefined
  }
}

const install: PluginFunction<never> = (Vue: typeof _Vue) => {
  Vue.directive('separator', SeparatorDirective)
}

const VueThousandSeparator: PluginObject<never> = {
  install
}

if (window.Vue) {
  _Vue.use(VueThousandSeparator)
}

export { SeparatorDirective }
export default VueThousandSeparator