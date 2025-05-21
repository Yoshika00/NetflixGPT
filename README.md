# Netflix GPT - A movie recommendation app (using chat-gpt)

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to Production
- Create Signup User Account
- Implement Sign in user API
- Created Redux Store with userSlice
- Implement Sign Out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to constants file
- Register TMDB API & create an app and get access token (TMDB is only works if user have airtel network )
- Get data from TMDB (now playing movies list API)
- Create custom hook ( useNowPlayingMovies, useMovieTrailer )
- Create movieSlice
- Update store with movie Data
- Planning for MainContainer & SecondaryContainer
- Fetch Data for Trailer video
- Update store with Trailer Video Data
- Embedded the Youtube Video and make it autoplay & mute
- Add Tailwind classes for style
- Build secondary component


# Features
- Login/Sign Up
    - Sign In / Sign Up Form
    - Redirect to Browse Page

- Browse ( after authentication )
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - Movie Suggestions
             - MovieLists * N

- NetflixGPT
    - Search Bar
    - Movie Suggestions
