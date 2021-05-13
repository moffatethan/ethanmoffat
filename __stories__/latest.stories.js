import React from 'react'
import { Latest } from '../components/latest'

export default {
  title: 'Multi-Component/Latest',
  component: Latest
}

export const Primary = args => (
  <div className="w-3/5">
    <Latest {...args} />
  </div>
)