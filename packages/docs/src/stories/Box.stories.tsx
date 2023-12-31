import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@jupiter-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
