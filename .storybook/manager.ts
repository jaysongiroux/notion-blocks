// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme: theme,
  brandTitle: 'Notion-Blocks',
  brandImage:
    'https://github.com/jaysongiroux/notion-blocks/blob/master/assets/notionBlocks.png?raw=true',
});
