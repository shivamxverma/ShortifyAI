# ShortifyAI

## Overview
ShortifyAI is a web application that generates short videos based on user inputs. Users can provide an image, topic, and duration, and the application creates a video with accompanying audio using the Gemini API.

## Features
- **Form-Based Interface**: Allows users to input an image, topic, and video duration for customized video generation.
- **Audio Integration**: Utilizes the Gemini API to convert generated content into audio, enhancing video output.
- **Efficient Workflow**: Streamlines the process of handling user inputs to produce short videos quickly.

## Tech Stack
- **Frontend**: Next.js, JavaScript
- **API**: Gemini API for audio generation
- **Backend**: Next.js API routes for processing inputs

## Installation
1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/shivamxverma/shortifyAI.git](https://github.com/shivamxverma/ShortifyAI.git)
   cd shortifyAI
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Usage
1. Navigate to the application in your browser.
2. Fill out the form with:
   - An image file (e.g., PNG, JPG)
   - A topic for the video content
   - Desired video duration (in seconds)
3. Submit the form to generate a video with audio narration.
4. Download or preview the generated video.

## Dependencies
- `next`: Framework for server-rendered React applications
- `react`: UI library
- `axios`: For making API requests to Gemini API
- (Add other dependencies as needed)

## API Integration
- **Gemini API**: Used for converting text content into audio. Ensure you have a valid API key and sufficient quota for audio generation.
- API requests are handled via Next.js API routes to securely process user inputs and communicate with the Gemini API.
```
