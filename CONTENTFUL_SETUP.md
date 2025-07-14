# Contentful Setup Guide for Careers Page

This guide explains how to set up the required content models in Contentful for the careers page functionality.

## Required Content Models

### 1. Job Content Model

Create a content model with the ID `jobListing` and the following fields:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| title | Short text | Yes | Job title |
| department | Short text | Yes | Department (e.g., Engineering, Sales, Product) |
| location | Short text | Yes | Job location |
| type | Short text | Yes | Job type (e.g., Full-time, Part-time, Contract) |
| description | Long text | Yes | Job description |
| requirements | Array of Short text | No | List of job requirements |
| benefits | Array of Short text | No | List of job benefits |
| salary | Short text | No | Salary range or information |

### 2. Job Application Content Model

Create a content model with the ID `jobApplication` and the following fields:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| firstName | Short text | Yes | Applicant's first name |
| lastName | Short text | Yes | Applicant's last name |
| email | Short text | Yes | Applicant's email address |
| phone | Short text | No | Applicant's phone number |
| location | Short text | Yes | Applicant's location |
| linkedinUrl | Short text | No | LinkedIn profile URL |
| portfolioUrl | Short text | No | Portfolio website URL |
| currentCompany | Short text | No | Current employer |
| currentTitle | Short text | No | Current job title |
| experience | Short text | Yes | Years of experience |
| education | Short text | No | Highest education level |
| coverLetter | Long text | No | Cover letter content |
| workAuthorization | Boolean | No | Work authorization status |
| remoteWork | Boolean | No | Remote work preference |
| salaryExpectation | Short text | No | Salary expectation |
| startDate | Date | No | Earliest start date |
| source | Short text | No | How they heard about the position |
| diversity | Short text | No | Diversity information (optional) |
| agreeToTerms | Boolean | Yes | Terms agreement |
| jobTitle | Short text | Yes | Applied job title |
| jobId | Short text | Yes | Applied job ID |
| status | Short text | Yes | Application status (New, Reviewing, Interview, Hired, Rejected) |
| applicationDate | Date | Yes | Application submission date |
| resume | Media | No | Uploaded resume file |
| portfolio | Media | No | Uploaded portfolio file |

## Setup Instructions

1. **Log into Contentful** and navigate to your space
2. **Go to Content Model** in the left sidebar
3. **Create the Job content model:**
   - Click "Add content type"
   - Set the API identifier to `jobListing`
   - Add all the fields listed above
   - Save and publish the content model

4. **Create the Job Application content model:**
   - Click "Add content type"
   - Set the API identifier to `jobApplication`
   - Add all the fields listed above
   - Save and publish the content model

5. **Add sample job entries:**
   - Go to Content in the left sidebar
   - Click "Add entry" and select the Job Listing content type
   - Create a few sample job postings with realistic data
   - Publish the entries

## Environment Variables

Make sure your environment variables are set up correctly:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## File Upload Handling

For production use, you may want to:

1. **Set up file upload handling** for resumes and portfolios
2. **Use a cloud storage service** (AWS S3, Google Cloud Storage, etc.)
3. **Store file URLs** in Contentful instead of the actual files
4. **Implement file size and type validation**

## Security Considerations

1. **Validate all form inputs** on both client and server side
2. **Implement rate limiting** for application submissions
3. **Add CAPTCHA** for spam prevention
4. **Encrypt sensitive data** if storing in Contentful
5. **Implement proper access controls** for viewing applications

## Testing

1. **Test the application form** with various inputs
2. **Verify data is saved** correctly in Contentful
3. **Test file uploads** (if implemented)
4. **Check email notifications** (if implemented)
5. **Test form validation** and error handling

## Optional Enhancements

1. **Email notifications** when applications are submitted
2. **Application status tracking** for candidates
3. **Integration with ATS systems** like Greenhouse, Lever, etc.
4. **Analytics tracking** for application funnel
5. **Automated screening** based on requirements 