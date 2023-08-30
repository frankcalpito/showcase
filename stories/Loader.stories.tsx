import type { Meta, StoryObj } from "@storybook/react"

import { Loader } from "../components/Loader/Loader"

const meta: Meta<typeof Loader> = {
  title: "Molecules/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
  },
}

export default meta

type DefaultStory = StoryObj<typeof Loader>
type DotsStory = StoryObj<typeof Loader<"dots">>
type SpinnerStory = StoryObj<typeof Loader<"spinner">>

export const Default: DefaultStory = {}

export const Dots: DotsStory = {
  args: {
    type: "dots",
    options: {
      dotCount: 5,
      colors: ["#0ff", "#f0f", "#ff0", "#00f", "#0f0", "#f00"]
    }
  }
}

export const Spinner: SpinnerStory = {
  args: {
    type: "spinner"
  },
}
