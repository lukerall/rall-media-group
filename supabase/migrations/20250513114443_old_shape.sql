/*
  # Fix contacts table RLS policies

  1. Security Changes
    - Remove existing duplicate insert policies
    - Add new policy for contact form submissions with:
      - Source validation
      - Basic field validation
      - Rate limiting (5 submissions per email per hour)
*/

-- Remove existing policies
DROP POLICY IF EXISTS "Allow public insert" ON contacts;
DROP POLICY IF EXISTS "Anyone can insert contacts" ON contacts;

-- Create new policy for contact form submissions
CREATE POLICY "Allow contact form submissions"
ON contacts
FOR INSERT
TO public
WITH CHECK (
  -- Ensure source is 'Website Form'
  source = 'Website Form' AND
  -- Basic validation
  length(name) > 0 AND
  length(email) > 0 AND
  -- Rate limiting: Only allow 5 submissions per email per hour
  (
    SELECT COUNT(*) < 5
    FROM contacts
    WHERE 
      contacts.email = email AND
      contacts.created_at > NOW() - INTERVAL '1 hour'
  )
);