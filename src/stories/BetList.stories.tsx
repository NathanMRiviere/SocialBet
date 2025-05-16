import type { Meta, StoryObj } from '@storybook/react';
import BetList from '../components/BetList';

const meta = {
    component: BetList,
    title: 'BetList',
    tags: ['autodocs'],
} satisfies Meta<typeof BetList>;
export default meta;

type Story = StoryObj<typeof BetList>;


export const List: Story = {
    args: {}
}
