import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies primary variant classes by default', () => {
    render(<Button>Default</Button>)
    const button = screen.getByRole('button', { name: /default/i })
    expect(button).toHaveClass('bg-emerald-700')
    expect(button).toHaveClass('text-white')
  })

  it('applies secondary variant classes when specified', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-white')
    expect(button).toHaveClass('text-slate-700')
  })

  it('applies danger variant classes when specified', () => {
    render(<Button variant="danger">Danger</Button>)
    const button = screen.getByRole('button', { name: /danger/i })
    expect(button).toHaveClass('bg-amber-700')
    expect(button).toHaveClass('text-white')
  })

  it('applies custom className along with default classes', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button', { name: /custom/i })
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('bg-emerald-700') // default primary variant
  })

  it('handles standard button props like disabled', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button', { name: /clickable/i })

    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
