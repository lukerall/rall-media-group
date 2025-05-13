/*
  # Add source column to contacts table

  1. Changes
    - Add source column to contacts table with default value
    - Ensure source column is not nullable
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'contacts' 
    AND column_name = 'source'
  ) THEN
    ALTER TABLE contacts ADD COLUMN source text NOT NULL DEFAULT 'Website Form';
  END IF;
END $$;