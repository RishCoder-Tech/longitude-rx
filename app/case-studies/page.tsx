import { getContentfulEntries } from '@/lib/contentful';
import CaseStudiesClient from './case-studies-client';

async function getCaseStudies() {
  try {
    return await getContentfulEntries('caseStudy');
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return <CaseStudiesClient caseStudies={caseStudies} />;
}

export const dynamic = "force-dynamic"; 