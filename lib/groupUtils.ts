import { supabase } from '@/lib/supabase';

export async function checkGroupID(id: string): Promise<boolean> {
  if (!id) {
    return false;
  }

  // Periksa apakah ID grup ada di dalam tabel grup Supabase
  const { data: group, error } = await supabase
    .from('group')
    .select('id')
    .eq('id', id)
    .single();

  if (error) {
    return false;
  }

  return !!group; // Mengembalikan true jika grup ditemukan, false jika tidak ditemukan
}
