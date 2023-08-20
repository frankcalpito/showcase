import type { Meta, StoryObj } from "@storybook/react"

import { Chart, ChartProps, transformToDataset } from "../components/Chart/Chart"
import { Button } from "../components/Button/Button"
import { useEffect, useState } from "react"
import { Card } from "../components/Card/Card"

const meta: Meta<typeof Chart> = {
  title: "Molecules/Chart",
  component: Chart,
  tags: ["autodocs"],
  argTypes: {},
  parameters:{
    controls:{
      exclude:/variations/gi
    }
  }
}

export default meta

type Story = StoryObj<typeof Chart>

const getData = (length: number, max: number = 100) => [...new Array(length)].map(() => Math.round(Math.random() * max))

const getLabels = (length: number) => [...new Array(length)].map((x: any, i: number) => `week ${i}`)

const getChartData = () => ({
  labels: getLabels(4),
  datasets: [...new Array(3)].map((x: any, i: number) => transformToDataset(getData(4), `Dataset ${i + 1}`))
})

const ChartTemplate = ({ type = "line" }: ChartProps) => {
  const [data, setData] = useState<any>()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!data) {
      setData(getChartData())
    }
  })

  return (
    <div className="block">
      <Button size="small" onClick={() => setData(getChartData())} >Redraw Chart</Button>
      <Chart className="mt-4" data={getChartData()} type={type} />
    </div>
  )
}

export const Default: Story = {
  args: {
    label: "Chart title",
  },
  render: () => {
    return <ChartTemplate />
  }
}

export const Variations: Story = {
  render: () => {
    return (
      <div className="grid sm:grid-cols-3 gap-2">
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="bar" />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="doughnut" />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="bubble" />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="pie" />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="polarArea" />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="radar" />
        </Card>
        <Card className="p-4 !bg-gray-700" disableEffects>
          <ChartTemplate type="scatter" />
        </Card>
      </div>
    )
  }
}
