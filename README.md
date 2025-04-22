# React Tic-Tac-Toe

A modern implementation of the classic Tic-Tac-Toe game built with React and styled with Tailwind CSS.

![Tic-Tac-Toe Game](screenshot.png)

## Features

- 🎮 Classic Tic-Tac-Toe gameplay
- 🎯 Turn-based system (X and O players)
- 🏆 Automatic win detection
- 🤝 Draw game detection
- 📜 Move history with time travel
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS

## Technologies Used

- React 18
- Tailwind CSS
- Vite
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## How to Play

1. The game starts with Player X
2. Players take turns clicking on empty squares
3. The first player to get 3 squares in a row (horizontally, vertically, or diagonally) wins
4. If no player gets 3 in a row and all squares are filled, the game is a draw
5. Use the move history on the right to go back to any previous game state

## Project Structure

```
tic-tac-toe/
├── src/
│   ├── App.jsx        # Main game component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles and Tailwind
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the React official tutorial
- Modern UI design principles
- Tailwind CSS for styling

---
Made with ❤️ and React
