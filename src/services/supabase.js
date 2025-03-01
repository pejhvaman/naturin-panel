import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gugxdslltzahypbcdali.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Z3hkc2xsdHphaHlwYmNkYWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjUxOTEsImV4cCI6MjA1NjA0MTE5MX0.tAHKtJHnpTxkGorQ28LPF9UBfuQnw1n7b8GBRbTY_GA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
