# Channel Analytics - A Coding Project

This project is a small, two-screen analytics dashboard built with React.

## Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Routing**: React Router DOM
- **Charts**: Recharts

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd your-channel-analytics
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (Not on port 3000 as usual). 

## Assumptions made

*   I used `recharts` as the "small chart lib OK" because it's lightweight and has great documentation (and faster than handcrafting a new chart).
*   For the flags and the app icons I used custom SVGs, for other things like themes I used emojis.
*   For some parts of the overview I used png-s because it would be easier (and, let's be honest, more realistic) to export them and use them as the background image then trying to replicate them using pure CSS.
*   On the design, the overview is a modal (which is just an additional Atom component), but you asked for the overview and the analytics to be different directories, so I went with my intuition and the background of the Overview project doesn't show Analytics. For it to show analytics it would be easy, since I would just have to put the component in the background, which would cause data rendering for no reason or I would have to put a screenshot in the back, which would be a bit weird. 

## If I Had One More Hour

With an additional hour, I would focus on the following:


1.  **Animation Polish**: Use a library like `framer-motion` to add more fluid page transitions and animate the appearance of the stat pills on the overview card.
2.  **Code Splitting**: Beyond just the chart, I would code-split at the route level using `React.lazy` for even better initial load performance.