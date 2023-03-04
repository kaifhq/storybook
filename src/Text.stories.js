import '@kaifhq/ds/dist/index.css'

export default {
  title: 'Text',
  argTypes: { content: { control: 'text' } },
}

export const Primary = (({ content }) =>
  `<h1 class="text-primary">${content}</h1>`
).bind({})
Primary.args = {
  content: 'Poster of events in the restaurant',
}

export const Secondary = (({ content }) =>
  `<h2 class="text-secondary">${content}</h2>`
).bind({})
Secondary.args = {
  content: 'KAIF Provenance is an eminent restaurant located in the heart of historical Moscow.',
}

export const Normal = (({ content }) =>
  `<span>${content}</span>`
).bind({})
Normal.args = {
  content: `Phone number: +7 (495) 266-69-66<br>
  Opening hours: Mon-Tue 12:00-00:00<br>
  Address: Moscow, st. Bolshaya Dmitrovka, 13`,
}

export const Bold = (({ content }) =>
  `<b>${content}</b>`
).bind({})
Bold.args = {
  content: 'Example bold text',
}
