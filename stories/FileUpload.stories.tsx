import type { Meta, StoryObj } from "@storybook/react"

import { FileUpload } from "../components/FileUpload/FileUpload"

const meta: Meta<typeof FileUpload> = {
  title: "Molecules/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
  },
}

export default meta

type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: {
    label: "File Upload",
    id: "fileUpload"
  },
}

export const Error: Story = {
  args: {
    label: "File Upload",
    id: "fileUpload",
    errorText: "Please select a file",
  },
}
