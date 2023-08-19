import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../components/Input/Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Input'
  },
}

export const LabelStyles: Story = {
  name: 'Label Styles',
  render: () => (
    <div className="grid grid-cols-3 gap-4 items-center">
      <Input label='floating' />
      <Input label='side' labelStyle='side' />
      <Input label='top' labelStyle='top' />
    </div>
  )
}