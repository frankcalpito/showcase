import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../components/Card/Card'

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: <div className="p-4 flex justify-center items-center">lorem ipsum</div>
  },
}

export const WithImage: Story = {
  name: 'With Image',
  render: () => (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 items-center">
      <Card imgSrc='https://placekitten.com/300/200' imgCaption='Kitten 1' />
      <Card imgSrc='https://placekitten.com/300/200' imgCaption='Kitten 2' />
      <Card imgSrc='https://placekitten.com/300/200' imgCaption='Kitten 3' />
    </div>
  )
}

export const WithoutImage: Story = {
  name: 'Without Image',
  render: () => (
    <div className="sm:grid sm:grid-cols-2 sm:gap-4 items-center">
      <Card>
        <div className="p-4">
          No Image
        </div>
      </Card>
      <Card>
        <div className="p-4">
          No Image
        </div>
      </Card>
    </div>
  )
}

export const WithoutEffects: Story = {
  name: 'Without Effects',
  render: () => (
    <div className="sm:grid sm:grid-cols-2 sm:gap-4 items-center">
      <Card disableEffects>
        <div className="p-4">
          No effect
        </div>
      </Card>
      <Card disableEffects>
        <div className="p-4">
          No effect
        </div>
      </Card>
    </div>
  )
}
