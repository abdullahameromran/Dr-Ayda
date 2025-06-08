
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "CRITICAL ERROR: Missing environment variable NEXT_PUBLIC_SUPABASE_URL. " +
    "This is required to connect to Supabase. " +
    "Please ensure it is set in your .env.local file (e.g., NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co) " +
    "and that you have RESTARTED the Next.js development server after creating or modifying this file."
  );
}
if (!supabaseAnonKey) {
  throw new Error(
    "CRITICAL ERROR: Missing environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
    "This is required for Supabase client authentication. " +
    "Please ensure it is set in your .env.local file (e.g., NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key) " +
    "and that you have RESTARTED the Next.js development server after creating or modifying this file."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// This client is for server-side operations that require elevated privileges.
// It should only be used in Server Actions or API routes.
export const createSupabaseAdminClient = () => {
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl) { // Should re-check supabaseUrl here as well for consistency, though caught above
    throw new Error(
      "CRITICAL ERROR: Missing environment variable NEXT_PUBLIC_SUPABASE_URL for admin client. " +
      "Please ensure it's set in .env.local and the server is restarted."
    );
  }
  if (!supabaseServiceRoleKey) {
    throw new Error(
      "CRITICAL ERROR: Missing environment variable SUPABASE_SERVICE_ROLE_KEY for admin operations. " +
      "This is required for server-side Supabase actions with elevated privileges. " +
      "Please ensure it is set in your .env.local file (e.g., SUPABASE_SERVICE_ROLE_KEY=your-service-role-key) " +
      "and that you have RESTARTED the Next.js development server after creating or modifying this file."
    );
  }
  // Important: When using the service role key, you might want to pass { auth: { persistSession: false } }
  // if you're not dealing with user sessions directly with this client.
  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    }
  });
};
