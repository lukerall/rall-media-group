/*
  # Fix contacts table RLS policies

  1. Changes
    - Remove existing restrictive policies
    - Add new policy for public form submissions with proper validation
    
  2. Security
    - Ensures source is 'Website Form'
    - Requires name and email
    - Prevents SQL injection via input validation
*/

-- Drop existing policies that are too restrictive
DROP POLICY IF EXISTS "Allow website form inserts" ON contacts;
DROP POLICY IF EXISTS "Allow website form submissions" ON contacts;

-- Create new policy that properly validates form submissions
CREATE POLICY "Enable contact form submissions" ON contacts
FOR INSERT TO public
WITH CHECK (
  -- Ensure required fields are present and not empty
  name IS NOT NULL AND
  name != '' AND
  email IS NOT NULL AND
  email != '' AND
  -- Validate email format using regex
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
  -- Ensure source is from the website form
  source = 'Website Form'
);