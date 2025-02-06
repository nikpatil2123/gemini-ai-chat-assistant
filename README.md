# Gemini AI Assistant

A React-based web application that integrates with Google's Gemini AI API to provide intelligent responses and assist users with their queries.

## Features

- Real-time AI responses
- Markdown-style formatting
- Code block support with syntax highlighting
- Clean and responsive UI
- Error handling and loading states

## Tech Stack

- React 18
- Vite
- Google Gemini AI API
- CSS Modules

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Platform account with Gemini API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nikpatil2123/gemini-ai-assistant.git
cd gemini-ai-assistant
```

2. Install dependencies:
```
npm install
# or
yarn install
```
3. Create a .env file in the root directory:
```
VITE_GEMINI_API_KEY=your_api_key_here
```
4. Start the development server:
```
npm run dev
# or
yarn dev
```

## Usage

- Enter your query in the text area
- Click 'Send' or press Enter
- View the formatted response from Gemini AI

## Configuration

The application uses environment variables for configuration:

- `VITE_GEMINI_API_KEY:` Your Google Gemini API key

## Contributing

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## Acknowledgments
- Google Gemini AI
- React Community
- Vite
