import { supabase } from './supabaseClient'
import { Database } from '../types/supabase'

type TableNames = keyof Database['public']['Tables']

export async function fetchTableData<T extends TableNames>(
  table: T,
  matchParams?: Partial<Database['public']['Tables'][T]['Row']>
): Promise<Database['public']['Tables'][T]['Row'][]> {
  let query = supabase.from(table).select('*')

  if (matchParams) {
    query = query.match(matchParams)
  }

  const { data, error } = await query

  if (error) {
    console.error(`Error fetching from ${table}:`, error)
    throw error
  }

  return data as unknown as Database['public']['Tables'][T]['Row'][]
}

export async function insertTableData<T extends TableNames>(
  table: T,
  payload: Database['public']['Tables'][T]['Insert'] | Database['public']['Tables'][T]['Insert'][]
): Promise<Database['public']['Tables'][T]['Row'][]> {
  const { data, error } = await supabase
    .from(table)
    .insert(payload as any)
    .select()

  if (error) {
    console.error(`Error inserting into ${table}:`, error)
    throw error
  }

  return data as unknown as Database['public']['Tables'][T]['Row'][]
}
