# Monday.com Integration Setup Guide

## 📋 **Overview**
This guide will help you set up Monday.com boards to receive contact form submissions and newsletter subscriptions from your website.

## 🎯 **What's Been Created**
- ✅ Contact Form API Route (`/api/contact-form`)
- ✅ Newsletter Subscription API Route (`/api/newsletter-subscription`)
- ✅ Updated Contact Form with submission handling
- ✅ Updated Footer Newsletter with submission handling
- ✅ Updated Newsletter Page with submission handling

## 📊 **Board Structure Requirements**

### **1. Contact Form Board**
Create a new board called **"Contact Form Submissions"** with these columns:

| Column Type | Column Name | Purpose | Example Values |
|-------------|-------------|---------|----------------|
| **Name** | Contact Name | Full name of the person | "John Doe" |
| **Email** | Email Address | Contact email | "john@example.com" |
| **Text** | Organization | Company/organization name | "Acme Healthcare" |
| **Text** | Role/Title | Job title/role | "Chief Pharmacy Officer" |
| **Long Text** | Message | Their inquiry message | "We're looking to improve..." |
| **Status** | Status | New, In Progress, Contacted, Closed | "New" |
| **Date** | Submission Date | When they submitted | "2024-01-15" |
| **People** | Assigned To | Who should handle this | Team member |
| **Text** | Source | Website contact form | "Website Contact Form" |

### **2. Newsletter Board**
Create a new board called **"Newsletter Subscriptions"** with these columns:

| Column Type | Column Name | Purpose | Example Values |
|-------------|-------------|---------|----------------|
| **Name** | Subscriber Name | Full name (optional) | "John Doe" |
| **Email** | Email Address | Subscriber email | "john@example.com" |
| **Status** | Status | Active, Unsubscribed, Bounced | "Active" |
| **Date** | Signup Date | When they subscribed | "2024-01-15" |
| **Text** | Source | Where they signed up | "Footer", "Newsletter Page" |
| **Text** | Campaign | Any specific campaign | "Q1 2024 Campaign" |
| **People** | Assigned To | Marketing team member | Team member |

## 🔧 **Setup Steps**

### **Step 1: Create Monday.com Boards**
1. Go to your Monday.com workspace
2. Create two new boards with the structure above
3. Note down the **Board IDs** (found in the URL when viewing each board)

### **Step 2: Get API Keys**
1. Go to Monday.com Developer settings
2. Create a new API token with **write permissions**
3. Copy the API token

### **Step 3: Get Column IDs**
For each board, you need to get the column IDs:

1. **Open Monday.com Developer Tools** (F12 in browser)
2. **Go to Network tab**
3. **Make a change to any column** (like editing a cell)
4. **Look for the API call** in the Network tab
5. **Find the column ID** in the request payload

**Alternative Method:**
- Use Monday.com's GraphQL API explorer
- Query: `{ boards(ids: [YOUR_BOARD_ID]) { columns { id title } } }`

### **Step 4: Update API Routes**

#### **Contact Form API** (`app/api/contact-form/route.ts`)
Replace these placeholders:
```typescript
const MONDAY_API_KEY = 'YOUR_CONTACT_FORM_API_KEY'
const MONDAY_BOARD_ID = 'YOUR_CONTACT_FORM_BOARD_ID'

const COLUMN_MAPPING = {
  name: 'name', // Contact Name column ID
  email: 'email_XXXXXXX', // Email column ID
  organization: 'text_XXXXXXX', // Organization column ID
  role: 'text_XXXXXXX', // Role/Title column ID
  message: 'long_text_XXXXXXX', // Message column ID
  status: 'color_XXXXXXX', // Status column ID
  submissionDate: 'date_XXXXXXX', // Submission Date column ID
  assignedTo: 'multiple_person_XXXXXXX', // Assigned To column ID
  source: 'text_XXXXXXX', // Source column ID
}
```

#### **Newsletter API** (`app/api/newsletter-subscription/route.ts`)
Replace these placeholders:
```typescript
const MONDAY_API_KEY = 'YOUR_NEWSLETTER_API_KEY'
const MONDAY_BOARD_ID = 'YOUR_NEWSLETTER_BOARD_ID'

const COLUMN_MAPPING = {
  name: 'name', // Subscriber Name column ID
  email: 'email_XXXXXXX', // Email column ID
  status: 'color_XXXXXXX', // Status column ID
  signupDate: 'date_XXXXXXX', // Signup Date column ID
  source: 'text_XXXXXXX', // Source column ID
  campaign: 'text_XXXXXXX', // Campaign column ID
  assignedTo: 'multiple_person_XXXXXXX', // Assigned To column ID
}
```

## 🧪 **Testing**

### **Test Contact Form**
1. Go to `/contact` page
2. Fill out the form
3. Submit
4. Check your Monday.com Contact Form board for new item

### **Test Newsletter Subscription**
1. Go to footer or `/newsletter` page
2. Enter email address
3. Submit
4. Check your Monday.com Newsletter board for new item

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **"API key or board ID not set"**
   - Make sure you've replaced the placeholder values in the API routes

2. **"Monday.com GraphQL errors"**
   - Check that column IDs are correct
   - Verify API key has write permissions
   - Ensure board IDs are correct

3. **"Missing required fields"**
   - Check that all required form fields have `name` attributes
   - Verify form validation is working

### **Debug Steps:**
1. Check browser console for errors
2. Check server logs for API errors
3. Verify Monday.com API responses
4. Test API routes directly with tools like Postman

## 📈 **Features Included**

### **Contact Form Features:**
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Automatic status setting to "New"
- ✅ Detailed activity updates in Monday.com
- ✅ Source tracking

### **Newsletter Features:**
- ✅ Email validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Automatic status setting to "Active"
- ✅ Source tracking (Footer vs Newsletter Page)
- ✅ Campaign tracking capability

## 🚀 **Next Steps**

Once you provide the API keys and column IDs, I'll update the files with the actual values and you'll be ready to go!

**Please provide:**
1. Contact Form Board ID
2. Newsletter Board ID
3. API Key (can be the same for both)
4. Column IDs for each board 