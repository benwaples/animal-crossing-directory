import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { VillagerList } from './VillagerList'

describe('VillagerList component snapshot', () => {
  it('should render a VillagerList Component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <VillagerList 
        villagers={[
          {
          _id: 'random String',
          name: 'random String',
          imageUrl: 'random String',
        },
          {
          _id: 'random',
          name: 'random',
          imageUrl: 'random',
        },
          {
          _id: 'String',
          name: 'String',
          imageUrl: 'String',
        },
      ]}
        />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
