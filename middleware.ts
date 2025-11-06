// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// 1. Define all your public (unprotected) routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/mocks',
  '/instructions',
  // You might need to add /api/webhooks(.*) if you add webhooks
]);

// 2. This is the middleware function
export default clerkMiddleware((auth, req) => {
  // Protect all routes that are NOT in your isPublicRoute list
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

// 3. This is your config
export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};