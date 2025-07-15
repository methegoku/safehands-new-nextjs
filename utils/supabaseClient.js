// utils/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fkksqyjktjnjagljgmff.supabase.co";
// from Supabase > Project > Settings > API
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZra3NxeWprdGpuamFnbGpnbWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NTQzNjIsImV4cCI6MjA2ODEzMDM2Mn0.Cw5Pt_GMo7GoKlOpl1lErfnzP20YjuTjWxkA9JUa1B4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
