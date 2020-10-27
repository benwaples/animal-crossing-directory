import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { VillagerDirectory } from './VillagerDirectory'
import { getVillagers } from '../../../services/villager-api'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

jest.mock('../../../services/villager-api')

describe('VillagerDirectory component behavior test', () => {
  it('should render a list of villagers', () => {
   act(() => getVillagers.mockResolvedValue([
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
    ]))
    
    render(
    <MemoryRouter>
      <VillagerDirectory />
    </MemoryRouter>)


    return waitFor(() => {
      expect(screen.getByTestId('villager list')).not.toBeEmptyDOMElement()
    })
      

  

  
    
  })
})
