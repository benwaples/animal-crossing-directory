import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import { getVillager } from '../../../services/villager-api'
import { DetailedVillager } from './DetailedVillager'

jest.mock('../../../services/villager-api')

describe('DetailedVillager component behavior test', () => {
  it('should render the detailedVillager with a detailed villager', () => {
    getVillager.mockResolvedValue({
      name: 'a random string of things',
      image: 'a random string of things',
      personality: 'a random string of things',
      species: 'a random string of things',
      birthday: 'a random string of things',
      skill: 'a random string of things',
      quote: 'a random string of things'
    })
    
    render(<DetailedVillager name="a name" match={ {params: { _id: 'a;ljkdflk;j'}}} />)

    return waitFor(() => {
      expect(screen.getByTestId('detailedVillager')).not.toBeEmptyDOMElement()
    })
  })
})
