/*
  # Update contacts table RLS policy

  1. Changes
    - Update the INSERT policy for contacts table to properly validate form submissions
    - Keep email format validation
    - Keep required field validation
    - Remove overly restrictive conditions

  2. Security
    - Maintains email format validation
    - Ensures required fields are present
    - Prevents spam by requiring valid email format
*/

DROP POLICY IF EXISTS "Enable contact form submissions" ON contacts;

CREATE POLICY "Enable contact form submissions"
ON contacts
FOR INSERT
TO public
WITH CHECK (
  -- Ensure required fields are present and not empty
  name IS NOT NULL AND
  name <> '' AND
  email IS NOT NULL AND
  email <> '' AND
  -- Validate email format
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);