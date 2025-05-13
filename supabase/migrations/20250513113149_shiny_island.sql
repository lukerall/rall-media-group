/*
  # Add company column to contacts table

  1. Changes
    - Add 'company' column to 'contacts' table
      - Type: text
      - Nullable: true (since it's optional in the form)

  2. Security
    - No changes to RLS policies needed as the column inherits existing table policies
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'contacts' 
    AND column_name = 'company'
  ) THEN
    ALTER TABLE contacts ADD COLUMN company text;
  END IF;
END $$;