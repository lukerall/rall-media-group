/*
  # Update contacts table RLS policies

  1. Changes
    - Remove existing INSERT policy
    - Add new INSERT policy for public contact form submissions
    - Add rate limiting to prevent spam
    - Add validation for required fields

  2. Security
    - Only allows inserts from public users
    - Limits submissions to 5 per email address per hour
    - Requires name and email fields
    - Only allows 'Website Form' as source
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow contact form submissions" ON contacts;

-- Create new policy for contact form submissions
CREATE POLICY "Allow contact form submissions" ON contacts
FOR INSERT TO public
WITH CHECK (
  -- Ensure source is 'Website Form'
  source = 'Website Form' AND
  -- Require name and email
  length(name) > 0 AND
  length(email) > 0 AND
  -- Rate limit: max 5 submissions per email per hour
  (
    SELECT count(*) < 5
    FROM contacts AS existing_contacts
    WHERE 
      existing_contacts.email = email AND
      existing_contacts.created_at > now() - interval '1 hour'
  )
);