/*
  # Update RLS policies for contact form submissions

  1. Changes
    - Update RLS policy for contacts table to allow public insertions
    - Add validation checks for required fields and email format
    - Ensure data integrity while allowing anonymous submissions

  2. Security
    - Maintain email format validation
    - Require essential fields (name, email)
    - Prevent spam by requiring valid data format
*/

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Enable contact form submissions" ON contacts;

-- Create new policy with proper validation
CREATE POLICY "Enable contact form submissions" ON contacts
FOR INSERT TO public
WITH CHECK (
  -- Require name and email
  name IS NOT NULL AND
  name <> '' AND
  email IS NOT NULL AND
  email <> '' AND
  -- Validate email format
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
  -- Ensure source is set correctly
  source = 'Website Form'
);