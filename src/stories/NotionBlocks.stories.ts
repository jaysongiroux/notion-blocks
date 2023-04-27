import type { Meta, StoryObj } from '@storybook/react';
import { headers, paragraphs, codeBlocks } from './assets/blocks';
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

export const headersTest: Story = {
  args: {
    blocks: headers,
  },
};


export const paragraphTest: Story = {
  args: {
    blocks: paragraphs
  }
}

export const codeBlockTest: Story = {
  args: {
    blocks: codeBlocks,
  }
}