const SUPABASE_URL = 'https://xtodghuyenpjnuifbrqg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0b2RnaHV5ZW5wam51aWZicnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NjEzNjcsImV4cCI6MjA5NDEzNzM2N30.SB1BUJ3UZKQ0WKlBvy1oI_H8NEWvQjfEwcWxWAwxFik';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
