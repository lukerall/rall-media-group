import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oqmasxgmkbzunqsxmdhz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbWFzeGdta2J6dW5xc3htZGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMjY0MTksImV4cCI6MjA2MjcwMjQxOX0.ZtYS2DY284EVdirtLO0bPADXeT2PVgI93Bk9N49trmU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);