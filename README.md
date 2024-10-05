
# Video Game Discovery App 🎮🔍

**Video Game Discovery App** is a React-based application designed to help users explore a variety of video games by genre, platform, and search criteria. The app fetches data from the RAWG API and displays it in an easy-to-navigate format, providing game details and filtering options.

## Preview



https://github.com/user-attachments/assets/7382de7a-eec1-482a-8352-10bac3788ceb



## Overview

The **Video Game Discovery App** fetches game data using the RAWG API, allowing users to explore different genres and platforms. The app uses React Query for efficient data fetching, caching, and background synchronization. It supports features such as infinite scrolling and filtering by genre, platform, and search terms. The app also utilizes Zustand for state management, React Router for navigation, and has been deployed on Vercel.

## Features

- **Game Search by Genre and Platform**: Users can filter games based on selected genres and platforms for personalized discovery.
- **Infinite Scrolling**: Games are loaded as the user scrolls, providing a seamless experience.
- **Game Details**: Each game displays basic information such as title, genre, platform, and more.
- **Debounced Search**: The app optimizes search performance by debouncing user input to reduce unnecessary API calls.
- **Error Handling**: Graceful error handling ensures that API issues or missing data are handled appropriately.
- **Reusable Components**: Built reusable components for better maintainability and scalability.
- **Routing**: Added React Router for smooth navigation across different app sections.

## API Used

The app integrates with the **RAWG Video Games Database API**, which provides comprehensive data on video games across different genres and platforms:

- [RAWG API Documentation](https://rawg.io/apidocs)

## Technologies Used

- React
- TypeScript
- React Query
- Axios
- Chakra UI (for styling)
- Zustand (for state management)
- React Router (for navigation)
- Vercel (for deployment)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Video-Game-Discovery-App.git
```

2. Install the required dependencies:

```bash
npm install
```

3. Get your RAWG API key from [RAWG](https://rawg.io/apidocs) and add it to your environment variables.

4. Run the app locally:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Project Structure

```bash
Video-Game-Discovery-App/
│
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── public/
│   └── index.html
├── README.md
├── package.json
└── ...
```

## Components and Features

- **GameGrid Component**: Displays a grid of games based on the user's selected filters and search query.
- **GenreList Component**: Provides a list of genres for users to filter games by their preferred genre.
- **PlatformSelector Component**: Allows users to filter games based on their preferred platform (e.g., PlayStation, Xbox, PC).
- **SearchInput Component**: A debounced search input that helps users search games by name.
- **Infinite Scroll**: Games are fetched in batches, with additional results loaded as the user scrolls.
- **Error Handling**: Proper error messages are shown when the API fails to respond or the data is unavailable.

## Techniques and Optimizations

- **React Query for Data Fetching**: Efficiently fetches data from the API, caches results, and refetches data in the background.
- **Infinite Scrolling**: Allows for continuous loading of game data as the user scrolls.
- **Debounced Search**: Improves performance by reducing unnecessary API calls when the user types in the search input.
- **Error Boundaries**: Ensures the app gracefully handles errors during data fetching and rendering.

## Environment Variables

To run the project, you will need to set up the following environment variable:

```env
REACT_APP_RAWG_API_KEY=your_rawg_api_key_here
```

## Future Features

- **Game Details Page**: A more detailed view of each game, including gameplay videos, ratings, and more in-depth descriptions.
- **User Reviews**: Allow users to leave reviews and ratings for games.
- **Sorting Options**: Add sorting functionality for release date, popularity, etc.

## Conclusion

The **Video Game Discovery App**  is a React-based web application aimed at helping users explore games across multiple genres and platforms. Using React Query, infinite scrolling, Zustand for state management, and optimized search, the app ensures a smooth user experience.

---

Feel free to contribute to this project or suggest new features by opening an issue or pull request.
