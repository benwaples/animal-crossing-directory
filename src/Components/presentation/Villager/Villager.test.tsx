import React from 'react'
import { render } from '@testing-library/react'
import { Villager } from './Villager'
import { MemoryRouter } from 'react-router-dom'

describe('Villager component snapshot', () => {
  it('should render a villager component', () => {
    const { asFragment } = render(
    <MemoryRouter>
      <Villager 
      name="agent 2"
      imageUrl="show me the villager"
      _id="villagerId"
      />
    </MemoryRouter>)

    expect(asFragment()).toMatchSnapshot()
  })
})