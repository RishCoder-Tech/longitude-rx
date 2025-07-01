import { contentfulClient } from '@/lib/contentful'
import CareersClient from './careers-client'

async function getJobs() {
  try {
    const res = await contentfulClient.getEntries({ content_type: 'job' });
    return res.items;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

export default async function CareersPage() {
  const jobs = await getJobs();
  return <CareersClient jobs={jobs} />;
}
