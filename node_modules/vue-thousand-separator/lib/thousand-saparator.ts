import { DirectiveOptions, DirectiveFunction, VNode } from 'vue'
import { DirectiveBinding } from 'vue/types/options'
import AutoNumeric from 'autonumeric'

const bindAutoNumeric = (elm: HTMLElement, vnode: VNode): void => {
  /* @ts-ignore **/
  const anElement = new AutoNumeric(elm, AutoNumeric.getPredefinedOptions().integer)
  elm.addEventListener('input', () => vnode.componentInstance?.$emit('input', anElement.getNumber()))
}

const bind: DirectiveFunction = (el: HTMLElement, _binding: DirectiveBinding, vnode: VNode) => {
  const elm = el.getElementsByTagName('input')[0]
  bindAutoNumeric(elm, vnode)
}

const SeparatorDirective: DirectiveOptions = {
  bind
}

export default SeparatorDirective