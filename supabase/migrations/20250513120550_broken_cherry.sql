/*
  # Add message column to contacts table

  1. Changes
    - Add `message` column to `contacts` table
      - Type: text
      - Not nullable
      - Required for contact form submissions

  2. Security
    - No changes to RLS policies needed
    - Existing policies will cover the new column
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'contacts' 
    AND column_name = 'message'
  ) THEN
    ALTER TABLE contacts ADD COLUMN message text NOT NULL;
  END IF;
END $$;