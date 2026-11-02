import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  "";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  "";

const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SECRET_KEY ||
  "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    (supabaseAnonKey || supabaseServiceKey) &&
    !supabaseUrl.includes("your-project-id")
);

// Standard public/browser client
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey || supabaseServiceKey)
  : null;

// Server-side client for API routes: prioritizes service role key to bypass RLS,
// falling back to anon key if service role is not provided.
export function getServerSupabase(): SupabaseClient | null {
  if (!supabaseUrl || supabaseUrl.includes("your-project-id")) {
    return null;
  }
  const activeKey = supabaseServiceKey || supabaseAnonKey;
  if (!activeKey) return null;

  return createClient(supabaseUrl, activeKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

