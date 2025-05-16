import type { Meta, StoryObj } from '@storybook/react';
import PropBetListItem from '../components/PropBetListItem';

const meta = {
    component: PropBetListItem,
    title: 'PropBetListItem',
    tags: ['autodocs'],
} satisfies Meta<typeof PropBetListItem>;
export default meta;
    

type Story = StoryObj<typeof PropBetListItem>;


export const CollapsedItem: Story = {
    args: {
        id : 1,
        name : "Nathan Riviere",
        type : "Rushing Yards",
        line : 255.5,
        over : -100,
        under : -150,
        overPct : 62,
        underPct : 48
    },
  };
  