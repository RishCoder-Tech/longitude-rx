import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'v3c4bq5g',
  dataset: 'production',
  apiVersion: '2023-06-01',
  useCdn: true,
  token: 'skZWsMqFpPYlAwgc1pmWXX9SvWZx5w4CWXN8LQlhMOJbEdgfrl3o3nMab3mAv1TDn99P3qw29vga0AcbUZmxqlICZV2gF7LPCZf5rrAX5lcs23iv1dKwAamYHaDBD9HxE3MnD0a0XwRu8xQVByGbs5INyYcJuiWY5YC7shnOxlow1kFDigr6',
}); 