import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/Button/Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  parameters:{
    controls:{
      exclude:/styles/gi
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Button',
  },
}

export const ButtonStyles: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 items-center sm:px-8">
      <p className='font-extralight font-mono leading-3 text-center'>Primary</p>
      <Button label='primary - small' size='small' />
      <Button label='default' />
      <Button label='primary - large' size='large' />
      <p className='font-extralight font-mono leading-3 text-center'>Outline</p>
      <Button label='primary - small' size='small' buttonType='outline' />
      <Button label='default' buttonType='outline' />
      <Button label='primary - large' size='large' buttonType='outline' />
    </div>
  ),
  parameters: {
    options: {
      showPanel: false,
    },
  }
}