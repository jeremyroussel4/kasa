import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Collapse from '../src/components/Collapse/Collapse'

describe('Collapse', () => {
  it('est fermé par défaut', () => {
    render(
      <Collapse title="Description">
        <p>Un logement agréable.</p>
      </Collapse>,
    )

    const button = screen.getByRole('button', { name: 'Description' })
    const collapse = button.closest('.collapse')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(collapse).not.toHaveClass('collapse--open')
  })

  it('s ouvre et se referme avec un clic', () => {
    render(
      <Collapse title="Équipements">
        <p>Wifi</p>
      </Collapse>,
    )

    const button = screen.getByRole('button', { name: 'Équipements' })
    const collapse = button.closest('.collapse')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(collapse).toHaveClass('collapse--open')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(collapse).not.toHaveClass('collapse--open')
  })
})
