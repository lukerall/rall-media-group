/*
  # Fix RLS policy for contacts table

  1. Changes
    - Drop existing policy
    - Create new policy with correct conditions
    - Remove rate limiting to simplify the policy
*/

-- Remove existing policy
DROP POLICY IF EXISTS "Allow contact form submissions" ON contacts;

-- Create simpler policy that matches our form data
CREATE POLICY "Allow website form submissions"
ON contacts
FOR INSERT
TO public
WITH CHECK (
  name IS NOT NULL AND
  email IS NOT NULL AND
  source = 'Website Form'
);