import '@kaifhq/ds/dist/index.css'

export default {
  title: 'Text',
  argTypes: {
    content: { control: 'text' },
    variant: {
      control: {type: 'radio'},
      options: ['primary', 'secondary'],
    },
  },
}

export const H1 = (({ content, variant }) =>
  `<h1 class="text-${variant}">${content}</h1>`
).bind({})
H1.args = {
  content: 'Poster of events in the restaurant',
  variant: 'primary'
}

export const H2 = (({ content, variant }) =>
  `<h2 class="text-${variant}">${content}</h2>`
).bind({})
H2.args = {
  content: 'KAIF Provenance is an eminent restaurant located in the heart of historical Moscow.',
  variant: 'secondary',
}

export const Normal = (({ content, variant }) =>
  `<span class="text-${variant}">${content}</span>`
).bind({})
Normal.args = {
  content: `Phone number: +7 (495) 266-69-66<br>
Opening hours: Mon-Tue 12:00-00:00<br>
Address: Moscow, st. Bolshaya Dmitrovka, 13`,
  variant: 'secondary',
}
