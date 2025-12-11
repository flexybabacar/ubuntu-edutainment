import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://jjodgejjcjumlzzuispd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqb2RnZWpqY2p1bWx6enVpc3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxODA1MTQsImV4cCI6MjA3NDc1NjUxNH0.nVgM7EdBkah2Ykmh5DOQF-vtzPt3C2wCcz97LtHT3sw";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testConnection() {
  console.log("Testing Supabase connection...");
  
  try {
    const { data, error } = await supabase
      .from('artists')
      .select('*')
      .limit(5);
    
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Artists data:", data);
      console.log("Total artists:", data?.length || 0);
    }
  } catch (err) {
    console.error("Exception:", err);
  }
}

testConnection();
