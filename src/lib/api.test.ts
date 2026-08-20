import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchTableData, insertTableData } from './api'
import { supabase } from './supabaseClient'

vi.mock('./supabaseClient', () => {
  return {
    supabase: {
      from: vi.fn(),
    },
  }
})

describe('api', () => {
  describe('insertTableData', () => {
    let consoleSpy: any

    beforeEach(() => {
      consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      vi.clearAllMocks()
    })

    afterEach(() => {
      consoleSpy.mockRestore()
    })

    it('returns inserted data on success', async () => {
      const mockData = [{ id: 1, name: 'John Doe' }]

      const mockSelect = vi.fn().mockReturnValue(
        Promise.resolve({ data: mockData, error: null })
      )

      const mockInsert = vi.fn().mockReturnValue({ select: mockSelect })

      vi.mocked(supabase.from).mockReturnValue({
        insert: mockInsert
      } as any)

      const payload = { name: 'John Doe' }
      const result = await insertTableData('persons' as any, payload as any)

      expect(supabase.from).toHaveBeenCalledWith('persons')
      expect(mockInsert).toHaveBeenCalledWith(payload)
      expect(mockSelect).toHaveBeenCalled()
      expect(result).toEqual(mockData)
      expect(consoleSpy).not.toHaveBeenCalled()
    })

    it('returns an empty array and logs an error when the supabase insert fails', async () => {
      const mockError = new Error('Insert failed')

      const mockSelect = vi.fn().mockReturnValue(
        Promise.resolve({ data: null, error: mockError })
      )

      const mockInsert = vi.fn().mockReturnValue({ select: mockSelect })

      vi.mocked(supabase.from).mockReturnValue({
        insert: mockInsert
      } as any)

      const payload = { name: 'John Doe' }
      const result = await insertTableData('persons' as any, payload as any)

      expect(supabase.from).toHaveBeenCalledWith('persons')
      expect(mockInsert).toHaveBeenCalledWith(payload)
      expect(mockSelect).toHaveBeenCalled()
      expect(result).toEqual([])
      expect(consoleSpy).toHaveBeenCalledWith('Error inserting into persons:', mockError.message)
    })
  })

  describe('fetchTableData', () => {
    let consoleSpy: any

    beforeEach(() => {
      consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      vi.clearAllMocks()
    })

    afterEach(() => {
      consoleSpy.mockRestore()
    })

    it('returns an empty array and logs an error when the supabase query fails', async () => {
      const mockError = new Error('Database connection failed')

      const mockSelect = vi.fn().mockReturnValue(
        Promise.resolve({ data: null, error: mockError })
      )

      vi.mocked(supabase.from).mockReturnValue({
        select: mockSelect
      } as any)

      // Test with error branch
      const result = await fetchTableData('persons' as any)

      expect(supabase.from).toHaveBeenCalledWith('persons')
      expect(mockSelect).toHaveBeenCalledWith('*')
      expect(result).toEqual([])
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching from persons:', mockError.message)
    })
  })
})
