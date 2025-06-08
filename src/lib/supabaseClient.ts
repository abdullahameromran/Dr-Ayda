
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// ==========================================================
// Supabase Client Initialization - Environment Check (Server-Side)
// This log block will run when this module is first imported on the server.
console.log("==========================================================");
console.log("Supabase Client Initialization - Environment Check (Server-Side)");
console.log(`Timestamp: ${new Date().toISOString()}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

console.log("Available NEXT_PUBLIC_ prefixed environment variables visible to this server process:");
let foundNextPublicSupabaseUrl = false;
let foundNextPublicSupabaseAnonKey = false;
Object.keys(process.env).forEach(key => {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.log(`  ${key}: '${process.env[key] ? "******** (present, value hidden for security)" : "undefined (MISSING!)"}'`);
    if (key === 'NEXT_PUBLIC_SUPABASE_URL' && process.env[key]) {
      foundNextPublicSupabaseUrl = true;
    }
    if (key === 'NEXT_PUBLIC_SUPABASE_ANON_KEY' && process.env[key]) {
      foundNextPublicSupabaseAnonKey = true;
    }
  }
});
if (!foundNextPublicSupabaseUrl) {
  console.log("  CRITICAL WARNING: NEXT_PUBLIC_SUPABASE_URL was NOT found among process.env keys starting with NEXT_PUBLIC_");
}
if (!foundNextPublicSupabaseAnonKey) {
  console.log("  CRITICAL WARNING: NEXT_PUBLIC_SUPABASE_ANON_KEY was NOT found among process.env keys starting with NEXT_PUBLIC_");
}

console.log("Attempting to access SUPABASE_SERVICE_ROLE_KEY (should be secret):");
console.log(`  SUPABASE_SERVICE_ROLE_KEY: '${process.env.SUPABASE_SERVICE_ROLE_KEY ? "******** (present)" : "undefined (MISSING!)"}'`);
console.log("==========================================================");
// End of diagnostic log block
// ==========================================================


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
console.log(`[SupabaseClient] Value read for NEXT_PUBLIC_SUPABASE_URL: '${supabaseUrl}'`);
console.log(`[SupabaseClient] Value read for NEXT_PUBLIC_SUPABASE_ANON_KEY: '${supabaseAnonKey ? "******** (present)" : "undefined (MISSING!)"}'`);


if (!supabaseUrl) {
  throw new Error(
    "CRITICAL CONFIGURATION ERROR: Environment variable NEXT_PUBLIC_SUPABASE_URL is missing or undefined. \n\n" +
    "This variable is ESSENTIAL for connecting to your Supabase database. \n\n" +
    "Troubleshooting Steps: \n" +
    "1. Verify '.env.local': Ensure a file named '.env.local' exists in the ROOT of your project. \n" +
    "   It MUST contain: NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co \n" +
    "   (Replace 'your-project-ref' with 'ywbhdhptvmulflrhhavcs' for your project). \n" +
    "2. Restart Server: After creating or modifying '.env.local', YOU MUST RESTART your Next.js development server (e.g., stop 'npm run dev' and run it again). \n" +
    "3. Firebase Studio / IDX Environment (HIGHLY IMPORTANT): If you are using a platform like Firebase Studio (IDX), environment variables are often managed through the platform's specific UI or configuration files, NOT JUST '.env.local'. These platform settings can override or ignore local files. **CONSULT THE FIREBASE STUDIO (IDX) DOCUMENTATION for setting server-side/runtime environment variables.** \n" +
    "4. Console Logs: Check your SERVER CONSOLE (where 'npm run dev' output appears) for the detailed 'Supabase Client Initialization - Environment Check' logs above this error. If NEXT_PUBLIC_SUPABASE_URL shows 'undefined (MISSING!)' or the value read is 'undefined', the variable is not reaching the Next.js server process. \n" +
    "5. Typos: Double-check for typos in the variable name in '.env.local' or your platform's settings (it must be EXACTLY 'NEXT_PUBLIC_SUPABASE_URL'). \n\n" +
    "If the problem persists after checking platform-specific settings (Step 3), the variable is not being correctly supplied to your Next.js application's environment by your development/hosting platform."
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "CRITICAL CONFIGURATION ERROR: Environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY is missing or undefined. \n\n" +
    "This variable is ESSENTIAL for client-side Supabase authentication. \n\n" +
    "Troubleshooting Steps (similar to above, focusing on NEXT_PUBLIC_SUPABASE_ANON_KEY): \n" +
    "1. Verify '.env.local': Ensure '.env.local' in your project ROOT contains: \n" +
    "   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key \n" +
    "2. Restart Server: RESTART your Next.js development server after changes. \n" +
    "3. Firebase Studio / IDX Environment: Check platform-specific environment variable settings. \n" +
    "4. Typos: Check for typos in '.env.local' or platform settings (must be EXACTLY 'NEXT_PUBLIC_SUPABASE_ANON_KEY')."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// This client is for server-side operations that require elevated privileges.
// It should only be used in Server Actions or API routes.
export const createSupabaseAdminClient = () => {
  const adminSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Re-read for admin client context, though checked globally.
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.log(`[SupabaseAdminClient] Using URL for admin client: '${adminSupabaseUrl}'`);
  console.log(`[SupabaseAdminClient] Service Role Key Present: '${supabaseServiceRoleKey ? "******** (present)" : "undefined (MISSING!)"}'`);

  if (!adminSupabaseUrl) {
    // This should ideally be caught by the global check for supabaseUrl, but included for robustness.
    throw new Error(
      "CRITICAL CONFIGURATION ERROR (Admin Client): Environment variable NEXT_PUBLIC_SUPABASE_URL is missing or undefined. \n\n" +
      "This is also required for the admin client. See previous error messages for NEXT_PUBLIC_SUPABASE_URL troubleshooting. Ensure it's set in your Firebase Studio (IDX) platform settings if applicable."
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
      "3. Firebase Studio / IDX Environment: Check platform-specific environment variable settings for 'backend' or 'server-side' secrets. **CONSULT THE FIREBASE STUDIO (IDX) DOCUMENTATION.** \n" +
      "4. Typos: Check for typos in '.env.local' or platform settings (must be EXACTLY 'SUPABASE_SERVICE_ROLE_KEY')."
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

