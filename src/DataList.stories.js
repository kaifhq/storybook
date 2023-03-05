import '@kaifhq/ds/dist/index.css'
export default {
  title: 'Data list',
  argTypes: {
    dt: { control: 'text' },
    dd: { control: 'text' },
  },
}

export const Vertical = (({dt, dd}) => {
  return `<dl class="data-list vertical text-secondary"><dt>${dt}</dt><dd>${dd}</dd></dl>`
}).bind({})
Vertical.args = {
  dt: 'The address',
  dd: 'Bolshaya Dmitrovka, 13',
}

export const Horizontal = (({dt, dd}) => {
  return `<dl class="data-list text-secondary"><dt>${dt}</dt><dd>${dd}</dd></dl>`
}).bind({})
Horizontal.args = {
  dt: 'Opening hours:',
  dd: 'Mon-Tue 12:00-00:00',
}
