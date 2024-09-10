CREATE TABLE guestbook_wedding_001 (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  present BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  CONSTRAINT guestbook_wedding_001_pkey PRIMARY KEY (id)
);
