import '@kaifhq/ds/dist/index.css'
export default {
  title: 'Layout',
}

const NAV_LINKS = ['Home', 'About Us', 'Menu', 'Delivery', 'Contacts']
export const Row = ({}) => {
  const childs = NAV_LINKS.map(link =>
    `<a class="a text-secondary" href="#${link}">${link}</a>`
  )
  return `<div class="row-between">${childs.join('')}</div>`
}

export const Col = ({}) => {
  const childs = [
    '<span class="p text-primary">Bolshaya Dmitrovka, 13</span>',
    '<a class="a p text-secondary" href="tel:+74952666966">+7 (495) 266-69-66</a>',
  ]
  return `<div class="col items-end">${childs.join('')}</div>`
}
