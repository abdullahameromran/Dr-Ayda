
// ======================================================================
// IMPORTANT: SUPABASE API KEYS CONFIGURATION
//
// This application requires Supabase API keys to be configured as
// environment variables. The keys you provide (like anon public key
// and service role secret key) MUST be set in your environment:
//
// 1. NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
//    (e.g., https://your-project-ref.supabase.co)
//
// 2. NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anon (public) key.
//    This key is safe for client-side use if RLS is enabled.
//
// 3. SUPABASE_SERVICE_ROLE_KEY: Your Supabase service_role (secret) key.
//    This key bypasses RLS and MUST BE KEPT SECRET.
//    It should only be used in server-side environments.
//
// How to set them:
// - Locally: Create a `.env.local` file in your project root.
// - Deployment (e.g., Firebase Studio/IDX, Vercel, Netlify):
//   Use your hosting platform's environment variable settings.
//
// REMEMBER TO RESTART YOUR DEVELOPMENT SERVER AFTER CHANGING .env.local
// OR AFTER UPDATING PLATFORM ENVIRONMENT VARIABLES.
// ======================================================================

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
console.log("Note: NEXT_PUBLIC_ variables are available client-side (embedded at build time) and server-side (read from runtime env).");
console.log("Non-prefixed variables (like SUPABASE_SERVICE_ROLE_KEY) are only available server-side if set in the runtime env.");
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
    "ATTENTION FIREBASE STUDIO (IDX) / CLOUD PLATFORM USERS: Your platform's environment variable settings (see Step 1 below) often override or replace local '.env.local' files. PLEASE CHECK YOUR PLATFORM'S CONFIGURATION FIRST.\n\n" +
    "Troubleshooting Steps: \n" +
    "1. Firebase Studio / IDX / Cloud Platform Environment (MOST LIKELY CAUSE IN HOSTED ENVIRONMENTS): If you are using a platform like Firebase Studio (IDX), Vercel, Netlify, etc., ensure environment variables are correctly set within that platform's specific UI or configuration files. **CONSULT YOUR PLATFORM'S DOCUMENTATION for setting server-side/runtime environment variables.** These settings are often the source of truth and may ignore local `.env.local` files. \n" +
    "2. Verify '.env.local' (Primarily for Local Development, MAY BE IGNORED BY YOUR PLATFORM): Ensure a file named '.env.local' exists in the ROOT of your project. \n" +
    "   It MUST contain: NEXT_PUBLIC_SUPABASE_URL=https://ywbhdhptvmulflrhhavcs.supabase.co \n" +
    "3. Restart Server/Redeploy: After creating or modifying '.env.local' OR platform settings, YOU MUST RESTART your Next.js development server (e.g., stop 'npm run dev' and run it again) or redeploy your application. \n" +
    "4. Console Logs: Check your SERVER CONSOLE (where 'npm run dev' output or platform logs appear) for the detailed 'Supabase Client Initialization - Environment Check' logs. If NEXT_PUBLIC_SUPABASE_URL shows 'undefined (MISSING!)' or the value read is 'undefined', the variable is not reaching the Next.js server process. \n" +
    "5. Typos: Double-check for typos in the variable name in '.env.local' or your platform's settings (it must be EXACTLY 'NEXT_PUBLIC_SUPABASE_URL'). \n\n" +
    "If this problem persists after thoroughly checking platform-specific settings (especially Step 1), the `NEXT_PUBLIC_SUPABASE_URL` variable is definitively not being supplied to your Next.js application's environment by your development/hosting platform. **This is an EXTERNAL CONFIGURATION ISSUE that you MUST resolve at the platform level.** Application code changes cannot fix a missing environment variable."
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "CRITICAL CONFIGURATION ERROR: Environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY is missing or undefined. \n\n" +
    "This variable is ESSENTIAL for client-side Supabase authentication. \n\n" +
    "ATTENTION FIREBASE STUDIO (IDX) / CLOUD PLATFORM USERS: Your platform's environment variable settings (see Step 1 below) often override or replace local '.env.local' files. PLEASE CHECK YOUR PLATFORM'S CONFIGURATION FIRST.\n\n" +
    "Troubleshooting Steps: \n" +
    "1. Firebase Studio / IDX / Cloud Platform Environment (MOST LIKELY CAUSE IN HOSTED ENVIRONMENTS): If using Firebase Studio (IDX) or similar, check platform-specific environment variable settings. **CONSULT YOUR PLATFORM'S DOCUMENTATION.** \n" +
    "2. Verify '.env.local' (Primarily for Local Development, MAY BE IGNORED BY YOUR PLATFORM): Ensure '.env.local' in your project ROOT contains: \n" +
    "   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key \n" +
    "3. Restart Server/Redeploy: RESTART your Next.js development server or redeploy after changes. \n" +
    "4. Typos: Check for typos in '.env.local' or platform settings (must be EXACTLY 'NEXT_PUBLIC_SUPABASE_ANON_KEY'). \n\n" +
    "If this problem persists after thoroughly checking platform-specific settings (Step 1), the `NEXT_PUBLIC_SUPABASE_ANON_KEY` variable is definitively not being supplied to your Next.js application's environment by your development/hosting platform. **This is an EXTERNAL CONFIGURATION ISSUE that you MUST resolve at the platform level.**"
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
      "This is also required for the admin client. See previous error messages for NEXT_PUBLIC_SUPABASE_URL troubleshooting. Ensure it's set in your Firebase Studio (IDX) / Cloud Platform settings if applicable, as these may override `.env.local`."
    );
  }

  if (!supabaseServiceRoleKey) {
    throw new Error(
      "CRITICAL CONFIGURATION ERROR: Environment variable SUPABASE_SERVICE_ROLE_KEY is missing or undefined. \n\n" +
      "This variable is REQUIRED for server-side Supabase operations with admin privileges. This key MUST BE KEPT SECRET and should not be prefixed with NEXT_PUBLIC_. \n\n" +
      "ATTENTION FIREBASE STUDIO (IDX) / CLOUD PLATFORM USERS: Your platform's environment variable settings (see Step 1 below) for 'backend' or 'server-side' secrets are crucial. PLEASE CHECK YOUR PLATFORM'S CONFIGURATION FIRST.\n\n" +
      "Troubleshooting Steps: \n" +
      "1. Firebase Studio / IDX / Cloud Platform Environment (MOST LIKELY CAUSE IN HOSTED ENVIRONMENTS): If using Firebase Studio (IDX) or similar, check platform-specific environment variable settings for 'backend' or 'server-side' secrets. **CONSULT YOUR PLATFORM'S DOCUMENTATION.** \n" +
      "2. Verify '.env.local' (Primarily for Local Development, MAY BE IGNORED BY YOUR PLATFORM): Ensure '.env.local' in your project ROOT contains: \n" +
      "   SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key \n" +
      "3. Restart Server/Redeploy: RESTART your Next.js development server or redeploy after changes. \n" +
      "4. Typos: Check for typos in '.env.local' or platform settings (must be EXACTLY 'SUPABASE_SERVICE_ROLE_KEY'). \n\n" +
      "If this problem persists after thoroughly checking platform-specific settings (Step 1), the `SUPABASE_SERVICE_ROLE_KEY` variable is definitively not being supplied to your Next.js application's environment by your development/hosting platform. **This is an EXTERNAL CONFIGURATION ISSUE that you MUST resolve at the platform level.**"
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
    

    