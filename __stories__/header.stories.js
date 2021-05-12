import React from 'react'
import { Header } from '../components/header'

export default {
  title: 'Multi-Component/Header',
  component: Header
}

export const Primary = args => <Header {...args} />