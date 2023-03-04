import '@kaifhq/ds/dist/index.css'

export default {
  title: 'Button',
  argTypes: { content: { control: 'text' } },
}

export const Big = (({ content }) =>
  `<a class="button-l text-primary">${content}</a>`
).bind({})
Big.args = {
  content: 'DELIVERY',
}

export const Small = (({ content }) =>
  `<a class="button">${content}</a>`
).bind({})
Small.args = {
  content: 'EN',
}

