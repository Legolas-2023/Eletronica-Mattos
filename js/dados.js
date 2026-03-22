const supabaseUrl = 'https://xrfysfxvenoovgcvecxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZnlzZnh2ZW5vb3ZnY3ZlY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1NDM0NzksImV4cCI6MjA4MzExOTQ3OX0.3TSC4TzynfDlTwjWWszgIuguQxB5UoL8EkvsNzs8mAk';

const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
)