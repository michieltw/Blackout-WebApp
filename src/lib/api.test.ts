import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchTableData } from './api';
import { supabase } from './supabaseClient';

vi.mock('./supabaseClient', () => {
  return {
    supabase: {
      from: vi.fn(),
    }
  };
});

describe('fetchTableData', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mock console.error to avoid spamming the test output
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('fetches data successfully without matchParams', async () => {
    const mockData = [{ id: 1, name: 'Test' }];
    const selectMock = vi.fn().mockResolvedValue({ data: mockData, error: null });
    const fromMock = vi.fn().mockReturnValue({ select: selectMock });
    vi.mocked(supabase.from).mockImplementation(fromMock as any);

    const result = await fetchTableData('persons');

    expect(supabase.from).toHaveBeenCalledWith('persons');
    expect(fromMock).toHaveBeenCalled();
    expect(selectMock).toHaveBeenCalledWith('*');
    expect(result).toEqual(mockData);
  });

  it('fetches data successfully with matchParams', async () => {
    const mockData = [{ id: 2, name: 'Test 2' }];
    const matchMock = vi.fn().mockResolvedValue({ data: mockData, error: null });
    const selectMock = vi.fn().mockReturnValue({ match: matchMock });
    const fromMock = vi.fn().mockReturnValue({ select: selectMock });
    vi.mocked(supabase.from).mockImplementation(fromMock as any);

    const matchParams = { id: 2 };
    const result = await fetchTableData('persons', matchParams as any);

    expect(supabase.from).toHaveBeenCalledWith('persons');
    expect(selectMock).toHaveBeenCalledWith('*');
    expect(matchMock).toHaveBeenCalledWith(matchParams);
    expect(result).toEqual(mockData);
  });

  it('handles database error by logging error and returning empty array', async () => {
    const mockError = new Error('Database Error');
    const selectMock = vi.fn().mockResolvedValue({ data: null, error: mockError });
    const fromMock = vi.fn().mockReturnValue({ select: selectMock });
    vi.mocked(supabase.from).mockImplementation(fromMock as any);

    const result = await fetchTableData('persons');

    expect(supabase.from).toHaveBeenCalledWith('persons');
    expect(selectMock).toHaveBeenCalledWith('*');
    expect(console.error).toHaveBeenCalledWith('Error fetching from persons:', mockError);
    expect(result).toEqual([]);
  });
});
