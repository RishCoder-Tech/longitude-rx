# Supabase Setup for File Upload

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be set up

## 2. Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to Settings > API
3. Copy the following values:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## 3. Configure Environment Variables

Create or update your `.env.local` file with:

```env
# Monday.com Configuration (already configured)
MONDAY_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU1NTgwMzE2NCwiYWFpIjoxMSwidWlkIjo3NTU0MDgxMSwiaWFkIjoiMjAyNS0wOC0yOFQyMTowNzo0Mi4zNDFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6Mjg5NzM5NTIsInJnbiI6InVzZTEifQ.3oFQ9V95JqhU6ZTZaNWPa5do386CstnoQQdShaJtMpg
MONDAY_BOARD_ID=9518124651

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the placeholder values with your actual Supabase credentials.

## 4. Create Storage Bucket

1. In your Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Name it `resumes`
4. Set it as **Public** (so files can be accessed via URL)
5. Click **Create bucket**

## 5. Configure Storage Policies

After creating the bucket, you need to set up storage policies:

1. Go to **Storage** → **Policies** in your Supabase dashboard
2. Find the `resumes` bucket
3. Click **New Policy**
4. Choose **Create a policy from template**
5. Select **Allow public access to any file**
6. Click **Review** and then **Save policy**

This will allow files to be uploaded and accessed publicly.

## 6. Test the Configuration

After setting up the environment variables, restart your development server and test:

```bash
curl http://localhost:3000/api/test-supabase
```

You should see a success response with bucket information.

## 7. File Upload Flow

Once configured, the system will:

1. Upload PDF files to Supabase storage
2. Get public URLs for the uploaded files
3. Add clickable links to the Monday.com activity
4. Store file information in the Monday.com Files column

## 8. Security Considerations

- The `resumes` bucket is set to public for easy access
- Files are stored with unique names to prevent conflicts
- Consider implementing authentication for production use
- You can add RLS policies to restrict access if needed

## 9. Troubleshooting

If you encounter issues:

1. Check that environment variables are set correctly
2. Verify Supabase project is active
3. Ensure the `resumes` bucket exists and is public
4. Check browser console and server logs for errors 