import style from "./app.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import ThemeButton from "./components/atoms/ThemeButton";

export default function App() {
  return (
    <div className={style.container}>
      <ThemeButton />

      <Routes>
        <Route path="/" element={<Navigate replace to="/overview" />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}
