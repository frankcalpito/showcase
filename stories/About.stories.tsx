import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "About",
  argTypes: {
  },
  parameters:{
    controls:{
      exclude:/styles/gi
    }
  }
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 items-center bg-white w-screen h-screen">
      <div className="col">
        <h1 className="text-3xl">Franklin Calpito Jr</h1>
      </div>
    </div>
  ),
  parameters: {
    options: {
      showPanel: false,
    },
  }
}