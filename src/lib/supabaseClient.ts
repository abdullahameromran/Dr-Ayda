
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Early check for process.env availability
if (typeof process === 'undefined' || typeof process.env === 'undefined') {
  throw new Error(
    "CRITICAL SYSTEM ERROR: The 'process.env' object is not available. " +
    "This indicates a severe issue with the Node.js environment. " +
    "Please check your Next.js setup and provide more details if this error occurs."
  );
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debugging: Log the values being read. These should appear in your server console.
console.log(`[SupabaseClient] Attempting to read NEXT_PUBLIC_SUPABASE_URL: '${supabaseUrl}'`);
console.log(`[SupabaseClient] Attempting to read NEXT_PUBLIC_SUPABASE_ANON_KEY: '${supabaseAnonKey ? "******** (present)" : "undefined (MISSING!)"}'`);


if (!supabaseUrl) {
  throw new Error(
    "CRITICAL CONFIGURATION ERROR: Environment variable NEXT_PUBLIC_SUPABASE_URL is missing or undefined. \n\n" +
    "This variable is ESSENTIAL for connecting to your Supabase database. \n\n" +
    "Troubleshooting Steps: \n" +
    "1. Verify '.env.local': Ensure a file named '.env.local' exists in the ROOT of your project. \n" +
    "   It MUST contain: NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co \n" +
    "   (Replace 'your-project-ref' with 'ywbhdhptvmulflrhhavcs' for your project). \n" +
    "2. Restart Server: After creating or modifying '.env.local', YOU MUST RESTART your Next.js development server (e.g., stop 'npm run dev' and run it again). \n" +
    "3. Firebase Studio / IDX Environment: If you are using a platform like Firebase Studio (IDX), ensure environment variables are correctly set within that platform's settings. These settings might override or be used instead of '.env.local'. Consult the platform's documentation. \n" +
    "4. Console Logs: Check your SERVER CONSOLE (where 'npm run dev' output appears) for lines starting with '[SupabaseClient] Attempting to read...'. If NEXT_PUBLIC_SUPABASE_URL shows 'undefined', the variable is not reaching the Next.js process. \n" +
    "5. Typos: Double-check for typos in the variable name in '.env.local' (it must be EXACTLY 'NEXT_PUBLIC_SUPABASE_URL'). \n\n" +
    "If the problem persists, the variable is not being correctly supplied to your Next.js application's environment."
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "CRITICAL CONFIGURATION ERROR: Environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY is missing or undefined. \n\n" +
    "This variable is ESSENTIAL for client-side Supabase authentication. \n\n" +
    "Troubleshooting Steps: \n" +
    "1. Verify '.env.local': Ensure '.env.local' in your project ROOT contains: \n" +
    "   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key \n" +
    "2. Restart Server: RESTART your Next.js development server after changes. \n" +
    "3. Firebase Studio / IDX Environment: Check platform-specific environment variable settings. \n" +
    "4. Typos: Check for typos in '.env.local' (must be EXACTLY 'NEXT_PUBLIC_SUPABASE_ANON_KEY')."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// This client is for server-side operations that require elevated privileges.
// It should only be used in Server Actions or API routes.
export const createSupabaseAdminClient = () => {
  const adminSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Re-read for admin client context, though checked globally.
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.log(`[SupabaseAdminClient] Using URL for admin client: '${adminSupabaseUrl}'`);
  console.log(`[SupabaseAdminClient] Attempting to read SUPABASE_SERVICE_ROLE_KEY: '${supabaseServiceRoleKey ? "******** (present)" : "undefined (MISSING!)"}'`);

  if (!adminSupabaseUrl) {
    // This should ideally be caught by the global check for supabaseUrl, but included for robustness.
    throw new Error(
      "CRITICAL CONFIGURATION ERROR (Admin Client): Environment variable NEXT_PUBLIC_SUPABASE_URL is missing or undefined. \n\n" +
      "This is also required for the admin client. See previous error messages for NEXT_PUBLIC_SUPABASE_URL troubleshooting."
    );
  }

  if (!supabaseServiceRoleKey) {
    throw new Error(
      "CRITICAL CONFIGURATION ERROR: Environment variable SUPABASE_SERVICE_ROLE_KEY is missing or undefined. \n\n" +
      "This variable is REQUIRED for server-side Supabase operations with admin privileges. This key MUST BE KEPT SECRET and should not be prefixed with NEXT_PUBLIC_. \n\n" +
      "Troubleshooting Steps: \n" +
      "1. Verify '.env.local': Ensure '.env.local' in your project ROOT contains: \n" +
      "   SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key \n" +
      "2. Restart Server: RESTART your Next.js development server after changes. \n" +
      "3. Firebase Studio / IDX Environment: Check platform-specific environment variable settings for 'backend' or 'server-side' variables. \n" +
      "4. Typos: Check for typos in '.env.local' (must be EXACTLY 'SUPABASE_SERVICE_ROLE_KEY')."
    );
  }

  return createClient<Database>(adminSupabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    }
  });
};
