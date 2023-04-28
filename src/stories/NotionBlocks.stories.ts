import type { Meta, StoryObj } from '@storybook/react';
import { headers as headerBlocks, paragraphs, codeBlocks, pictures, callOuts, quoteBlocks, bulletListBlocks, dividerBlocks, numberListBlocks } from './assets/blocks';
import { NotionBlocks } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'NotionBlocks/NotionBlocks',
  component: NotionBlocks,
  argTypes: {
    
  },
} satisfies Meta<typeof NotionBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const headerBlock: Story = {
  args: {
    blocks: headerBlocks,
  },
};

export const paragraphBlock: Story = {
  args: {
    blocks: paragraphs
  }
}

export const codeBlock: Story = {
  args: {
    blocks: codeBlocks,
  }
}

export const ImageBlock: Story = {
  args: {
    blocks: pictures
  }
}

export const CalloutBlock: Story = {
  args: {
    blocks: callOuts
  }
}

export const QuoteBlock: Story = {
  args: {
    blocks: quoteBlocks
  }
}

export const BulletedListBlock: Story = {
  args: {
    blocks: bulletListBlocks
  }
}

export const numberedListBlock: Story = {
  args: {
    blocks: numberListBlocks
  }
}

export const dividerBlock: Story = {
  args: {
    blocks: dividerBlocks
  }
}