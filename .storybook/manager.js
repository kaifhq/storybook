import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  base: 'dark',
  brandImage: 'https://raw.githubusercontent.com/kaifhq/ds/main/kaif.png',
  brandTarget: '_self',

  appBg: '#080808',
  appContentBg: '#000',
  appBorderColor: '#0000',

  barTextColor: '#fffa',
  barSelectedColor: '#fff',
  barBg: '#111',
})

addons.setConfig({
  theme,
})
