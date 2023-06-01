import type { Meta, StoryObj } from '@storybook/react';
import {
  headerBlocks,
  paragraphBlocks,
  codeBlocks,
  pictureBlocks,
  callOutBlocks,
  quoteBlocks,
  bulletListBlocks,
  dividerBlocks,
  numberListBlocks,
  todoListBlocks,
  toggleHeadersBlocks,
  toggleListBlocks,
  twoColumnBlocks,
  threeColumnBlocks,
  kitchenSinkBlocks,
  bookmarkBlocks,
  equationBlocks,
  childPageBlocks,
  tableBlocks
} from './assets/blocks';
import { NotionBlocks } from '../components';

import '../components/styles/katex.css';
import { ThemeEnum } from '../components/types/code';

const meta = {
  title: 'NotionBlocks/NotionBlocks',
  component: NotionBlocks,
  argTypes: {},
} satisfies Meta<typeof NotionBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const kitchenSink: Story = {
  args: {
    blocks: kitchenSinkBlocks,
  },
};
export const headerBlock: Story = {
  args: {
    blocks: headerBlocks,
  },
};

export const ToggleHeaderBlock: Story = {
  args: {
    blocks: toggleHeadersBlocks,
  },
};

export const paragraphBlock: Story = {
  args: {
    blocks: paragraphBlocks,
  },
};

export const codeBlock: Story = {
  args: {
    blocks: codeBlocks,
    codeTheme: ThemeEnum.Dark,
  },
};

export const ImageBlock: Story = {
  args: {
    blocks: pictureBlocks,
  },
};

export const CalloutBlock: Story = {
  args: {
    blocks: callOutBlocks,
  },
};

export const QuoteBlock: Story = {
  args: {
    blocks: quoteBlocks,
  },
};

export const BulletedListBlock: Story = {
  args: {
    blocks: bulletListBlocks,
  },
};

export const numberedListBlock: Story = {
  args: {
    blocks: numberListBlocks,
  },
};

export const toggleListBlock: Story = {
  args: {
    blocks: toggleListBlocks,
  },
};

export const todoListBlock: Story = {
  args: {
    blocks: todoListBlocks,
  },
};

export const dividerBlock: Story = {
  args: {
    blocks: dividerBlocks,
  },
};

export const twoColumnBlock: Story = {
  args: {
    blocks: twoColumnBlocks,
  },
};

export const threeColumnBlock: Story = {
  args: {
    blocks: threeColumnBlocks,
  },
};

export const BookmarkBlock: Story = {
  args: {
    blocks: bookmarkBlocks,
  },
};

export const equationBlock: Story = {
  args: {
    blocks: equationBlocks,
  },
};

export const childPageBlock: Story = {
  args: {
    blocks: childPageBlocks,
  },
};

export const tableBlock: Story = {
  args: {
    blocks: tableBlocks
  }
}