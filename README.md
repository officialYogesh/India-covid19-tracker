# 🦠 COVID-19 Tracker for India

A comprehensive React-based dashboard to track current and historical COVID-19 data for India and its states and union territories.

## 🌐 Live Demo

**[View Live Website](https://covid19tracker.iamyogesh.com/)**

## ✨ Features

### 🗺️ Interactive Map

- Hover over any state or UT to view real-time COVID-19 statistics
- Visual representation of data across Indian states and territories

### 🌙 Dark Mode

- Toggle between light and dark themes for better user experience

### 📊 Historical Data Visualization

- Interactive charts displaying daily or cumulative data
- Track confirmed, recovered, and deceased cases
- Customizable time spans: 1 month, 3 months, or all available data
- State-wise or all-India data visualization

### 📋 Sortable Data Table

- Comprehensive table view with sortable columns
- Easy comparison between different states and UTs

## 🔧 Prerequisites

### Node.js Version Requirement

This project requires **Node.js version 16.x** (specifically 16.20.2 recommended) due to compatibility with react-scripts 3.4.3.

#### Installing the Correct Node.js Version

**Using FNM (Fast Node Manager) - Recommended:**

```bash
# Install FNM
winget install Schniz.fnm

# Install and use Node.js 16.20.2
fnm install 16.20.2
fnm use 16.20.2

# Create .node-version file for automatic version switching
echo "16.20.2" > .node-version
```

**Using NVM (Alternative):**

```bash
# Install Node.js 16.20.2
nvm install 16.20.2
nvm use 16.20.2
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/officialYogesh/India-covid19-tracker.git
cd India-covid19-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

### 5. Serve Production Build

```bash
npm install -g serve
serve -s build
```

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="60"/>
      <br><strong>React 16.14.0</strong>
    </td>
    <td align="center">
      <img src="https://www.chartjs.org/media/logo-title.svg" alt="Chart.js" width="60"/>
      <br><strong>Chart.js</strong>
    </td>
    <td align="center">
      <img src="https://mui.com/static/logo.png" alt="Material-UI" width="60"/>
      <br><strong>Material-UI</strong>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="60"/>
      <br><strong>JavaScript</strong>
    </td>
  </tr>
</table>

### Key Dependencies

- **React**: Frontend framework
- **Material-UI**: UI component library
- **Chart.js**: Data visualization
- **Axios**: HTTP client for API requests
- **React Simple Maps**: Interactive map components
- **D3**: Data-driven visualizations

## 📁 Project Structure

```
src/
├── api/                 # API service files
├── components/          # React components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── images/             # Static images
├── maps/               # Map data files
├── reducers/           # State management
└── styles/             # Styled components
```

## 🐛 Troubleshooting

### Common Issues

**Error: "digital envelope routines::unsupported"**

- This occurs when using Node.js 17+ with older react-scripts
- Solution: Use Node.js 16.20.2 as specified in prerequisites

**Package installation issues:**

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 📦 Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm start`     | Runs the app in development mode            |
| `npm test`      | Launches the test runner                    |
| `npm run build` | Builds the app for production               |
| `npm run eject` | Ejects from Create React App (irreversible) |

## 🔗 API Reference

This project uses the COVID-19 India API for real-time data:

- **Base URL**: `https://api.covid19india.org/`
- **Endpoints**: State-wise data, historical data, district-wise data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [COVID19-India API](https://api.covid19india.org/) for providing the data
- [Create React App](https://create-react-app.dev/) for the project setup
- Material-UI team for the beautiful components

---

### ⭐ Star this repository if you found it helpful!
