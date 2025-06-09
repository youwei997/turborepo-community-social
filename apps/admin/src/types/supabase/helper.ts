import { Database } from '@repo/supabase-service/supabase';

type TableNames = keyof Database['public']['Tables'];

export type TableRow<T extends TableNames> = Database['public']['Tables'][T]['Row'];
export type TableInsert<T extends TableNames> = Database['public']['Tables'][T]['Insert'];
export type TableUpdate<T extends TableNames> = Database['public']['Tables'][T]['Update'];
