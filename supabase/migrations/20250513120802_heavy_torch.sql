/*
  # Update contact form tables

  1. Changes
    - Remove message column from contacts table
    - Create submissions table for storing messages
    - Set up RLS policies for submissions

  2. Security
    - Enable RLS on submissions table
    - Add policy for public submissions
*/

-- Remove message column from contacts if it exists
ALTER TABLE contacts DROP COLUMN IF EXISTS message;

-- Create submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid REFERENCES contacts(id) ON DELETE CASCADE,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now()
);

-- Enable RLS on submissions
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow website message submission" ON submissions;

-- Add policy for public submissions
CREATE POLICY "Allow website message submission"
ON submissions
FOR INSERT
TO public
WITH CHECK (true);