-- Create the table for translation_requests
CREATE TABLE public.translation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  source_language TEXT NOT NULL,
  target_language TEXT NOT NULL,
  details TEXT,
  file_url TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create a policy to allow public (unauthenticated) users to create requests
-- This is necessary for the form to work for any visitor on your site.
CREATE POLICY "Allow public insert for translation requests"
ON public.translation_requests
FOR INSERT
WITH CHECK (true);

-- Create a storage bucket for translation file uploads
-- We'll set it as public for now for simplicity, but in a production environment
-- you would want more fine-grained permissions.
INSERT INTO storage.buckets (id, name, public)
VALUES ('translation_uploads', 'translation_uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Create a policy to allow anyone to upload files to this bucket.
CREATE POLICY "Allow public uploads to translation_uploads"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'translation_uploads'); 