# EventHub

EventHub is a web application for managing and discovering events. This project uses Next.js for the frontend and integrates with Firebase, Mongodb and a custom backend API(Using Node and Express JS).

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory based on the sample below.
4. Run the development server:
   ```bash
   npm run dev
   ```

## Sample `.env` file

Copy the following and fill in your own credentials as needed:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
MONGODB_URI="your-mongodb-uri"
NEXT_PUBLIC_API_AI_BASE_URL=https://your-ai-api-url.com
```

## License

MIT
