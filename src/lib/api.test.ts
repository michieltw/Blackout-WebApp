import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchTableData } from './api'
import { supabase } from './supabaseClient'

vi.mock('./supabaseClient', () => {
  return {
    supabase: {
      from: vi.fn(),
    },
  }
})

describe('api', () => {
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
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching from persons:', mockError)
    })
  })
})
