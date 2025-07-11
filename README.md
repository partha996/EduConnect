# EduConnect India

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Running Locally

To run this application on your local machine, follow these steps:

### 1. Set Up Environment Variables

The AI features in this app use the Google AI platform. You'll need an API key to enable them.

1.  Create a file named `.env` in the root of the project if it doesn't already exist.
2.  Add your Google AI API key to this file. You can get a free key from [Google AI Studio](https://aistudio.google.com/app/apikey).

    ```
    GOOGLE_API_KEY=AIzaSyAY5Gf6Gm21Ry5F46wRP2Cab-mdj6RpU-g
    ```
    
### 2. Install Dependencies

Before you can run the app, you need to install all of its required packages. Open your terminal in the project's root directory and run:

```bash
npm install
```

This command reads the `package.json` file and downloads all the necessary libraries into a `node_modules` folder in your project.

### 3. Run the Development Servers

You'll need to run two processes in separate terminal windows for the full application to work.

**Terminal 1: Start the Web App**

This command starts the Next.js development server for the user interface.

```bash
npm run dev
```

Your application will be available at [http://localhost:9002](http://localhost:9002).

**Terminal 2: Start the AI Flows**

This command starts the Genkit development server, which handles the AI-powered features. The web app communicates with this service.

```bash
npm run genkit:watch
```

Now, both the frontend and the AI backend services are running. You can open your browser to the address above and start developing!
