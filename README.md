# TalentLens AI 🔍✨

**TalentLens AI** is an enterprise-grade recruiter intelligence platform designed for consulting firms and high-growth tech companies. It uses AI-powered signals to analyze, verify, and rediscover candidates by linking their claims to verifiable digital evidence.

![TalentLens AI Banner](https://img.shields.io/badge/Enterprise-Consulting_UI-86BC25?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_Node_|_TS-000000?style=for-the-badge)

## 🌟 Key Features

### 📊 Recruiter Dashboard
*   **Pipeline Analytics**: Real-time visualization of candidate flow from application to hire.
*   **AI Hiring Insights**: Predictive alerts identifying skill exaggerations or high-growth "hidden gems."
*   **Skill Demand Trends**: Data-driven charts showing market demand vs. talent availability.

### 🧠 Candidate Intelligence
*   **GitHub Activity Engine**: Deep-dive analysis of commit patterns, repository complexity, and contribution consistency.
*   **Authenticity Scoring**: A proprietary metric verifying the originality of project work and code.
*   **Skill Evidence Graph**: An interactive visualization linking technical skills to specific "proof points" (repos, research papers, hackathons).

### 🔄 Talent Rediscovery
*   **Growth Tracking**: Automatically identifies past applicants who have upskilled and now match current requirements.
*   **Re-analysis Engine**: Batch re-screening of the entire talent pool against new job descriptions.

### ⚔️ Comparison Mode
*   **Radar Breakdown**: Side-by-side comparison of technical depth, risk factors, and experience.
*   **AI Recommendation**: automated selection of the strongest candidate based on role relevance.

## 🛠 Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Styling**: TailwindCSS v4 (Custom Deloitte Theme)
- **Animations**: Framer Motion
- **Charts**: Recharts & React Force Graph
- **Icons**: Lucide React
- **Language**: TypeScript

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Architecture**: Service-Controller Pattern

## 📂 Project Structure

```text
talent-lens/
├── frontend/                # React TypeScript Application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # High-level page views (Dashboard, etc.)
│   │   ├── types/           # TS Interfaces & Types
│   │   ├── utils/           # Mock data & Analytics helpers
│   │   └── App.tsx          # Main routing & layout entry
├── backend/                 # Express TypeScript Backend
│   ├── src/
│   │   ├── controllers/     # Route handers
│   │   ├── routes/          # API endpoint definitions
│   │   ├── services/        # Business logic & AI placeholders
│   │   └── app.ts           # Server configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/talent-lens.git
   cd talent-lens
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   npm run dev
   ```

## 🎨 Design Theme
Inspired by **Deloitte’s** corporate identity:
- **Primary Green**: `#86BC25`
- **Background**: `#000000` (Deep Black)
- **Cards**: `#1A1A1A` (Premium Dark)
- **Typography**: Inter / IBM Plex Sans

---
*Built with precision for the modern recruiter.*
