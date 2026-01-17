-- Create storage bucket for CV uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('cvs', 'cvs', false);

-- Allow anyone to upload CVs
CREATE POLICY "Anyone can upload CVs"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'cvs');

-- Allow reading CVs (for admin later)
CREATE POLICY "CVs are readable"
ON storage.objects
FOR SELECT
USING (bucket_id = 'cvs');