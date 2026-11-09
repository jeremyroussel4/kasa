import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Banner from './Banner'

describe('Banner', () => {
  it('affiche le titre reçu en prop', () => {
    render(<Banner image="/banner.jpg" title="Chez vous, partout et ailleurs" />)

    expect(
      screen.getByRole('heading', {
        name: 'Chez vous, partout et ailleurs',
      }),
    ).toBeInTheDocument()
  })

  it('utilise l image reçue comme arrière-plan', () => {
    render(<Banner image="/banner.jpg" title="Accueil" />)

    expect(screen.getByRole('heading', { name: 'Accueil' }).parentElement).toHaveStyle({
      backgroundImage: expect.stringContaining('url(/banner.jpg)'),
    })
  })

  it('peut afficher une bannière sans titre', () => {
    const { container } = render(<Banner image="/banner.jpg" title="" />)

    expect(container.querySelector('.banner')).toBeInTheDocument()
  })
})
