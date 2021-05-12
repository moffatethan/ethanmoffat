import React from 'react'
import { Latest } from '../components/latest'

export default {
  title: 'Multi-Component/Latest',
  component: Latest
}

export const Primary = args => <Latest {...args} />