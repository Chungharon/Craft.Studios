// pages/api/chat.js (or .ts)
// This file defines your API endpoint for the chatbot in Pages Router.

// Import necessary functions from the AI SDK and Google provider
import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google'; // For Gemini

// Initialize the Google Generative AI model
// Ensure you have GOOGLE_API_KEY set in your .env.local file
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

// Configure the API route to run in the Edge Runtime
export const config = {
  runtime: 'edge', // This tells Next.js to run this API route on the Edge network
  maxDuration: 30, // seconds
};

export default async function handler(req) {
  console.log('API route handler called.');
  console.log('GOOGLE_API_KEY presence check:', !!process.env.GOOGLE_API_KEY);

  try {
    const { messages } = await req.json();
    console.log('Received messages from frontend:', messages);

    const systemMessage = {
      role: 'system',
      content: `You are an AI assistant for Brandcraft. Your purpose is to answer questions specifically about Brandcraft's services, products, mission, and general information available on its website.

      Here is key information about Brandcraft:
      - **Company Name:** Brandcraft
      - **Mission:** To provide innovative web development, hosting, and cybersecurity solutions to businesses of all sizes, building beyond boundaries and creating tailored web and app experiences designed to grow with your business and captivate your audience.
      - **Services Offered:**
        - **Security, Hosting & Cloud Solutions:** AWS & Azure Setup, Daily Backups, DevOps Integration. Price: $199/month.
        - **Expert E-Commerce Solutions:** Custom e-commerce on Shopify, WooCommerce, Multi-store Setup, Omnichannel Support, Headless Commerce. Price: $299/month.
        - **API Integration:** REST & GraphQL, Third-party API Integration, Secure Endpoints. Price: $149/project.
        - **Custom App Development:** Tailored software solutions, Full Stack Dev, Mobile-First Design, High Scalability. Price: $499/project.
        - **SEO & Maintenance:** Improve rankings and maintain your site, SEO Optimization, Monthly Updates, Security Patching. Price: $99/month.
        - **WordPress Sites:** Custom WordPress sites with WooCommerce, Custom Themes, SEO & Security. Price: $249/project.
        - **Web Design & Graphic Solutions:** Stunning and responsive designs, UI/UX Design, Branding, Responsive Layouts. Price: $199/project.
        - **SaaS & AI Agents:** SaaS platform and AI agent development, Multi-tenant SaaS, AI Workflow Automation, User Dashboards. Price: $399/month.
      - **Typical Project Timeline:** Standard websites typically take 4-6 weeks, but this varies by complexity.
      - **Maintenance:** Yes, Brandcraft offers ongoing maintenance packages for security, updates, and smooth operation.
      - **Custom Features:** Absolutely, Brandcraft tailors website functionalities to match specific business needs and preferences.
      - **Contact Information:** Phone: +254701208343 (WhatsApp available).

      **Important Rules:**
      1.  Only answer questions related to Brandcraft and its offerings based on the information provided above.
      2.  If a question is outside the scope of Brandcraft or the provided information, politely state that you can only answer questions about the company.
      3.  Maintain a helpful, professional, and friendly tone.
      4.  Do not make up information. If you don't know, say so.
      `,
    };

    const messagesWithSystem = [systemMessage, ...messages];
    console.log('Messages sent to Gemini:', messagesWithSystem);

    // Call the generative AI model to stream text responses
    const result = await streamText({
      model: google('gemini-2.0-flash'),
      messages: messagesWithSystem,
    });

    // *** FIX IS HERE: Directly return the result of streamText, which is a Response object ***
    // The 'ai' SDK's streamText function is designed to return a Web Response directly
    // when used in an environment like Next.js Edge Runtime.
    // This removes the need for .toDataStreamResponse() here, simplifying the flow.
    return result.toDataStreamResponse(); // Reverting to this as it's the standard for ai/react

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Log the full error object for more details
    console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error)));

    // Return a more informative error response
    return new Response(JSON.stringify({
      error: 'Failed to get response from AI model. Please check the server logs for details.',
      details: error.message,
      // Include more error properties if available
      ...(error.cause && { cause: error.cause.message }),
      ...(error.status && { status: error.status }),
      // Add a generic message to help the user if details are sensitive
      userMessage: 'Sorry, I am unable to process your request at the moment. Please try again later or contact support.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}