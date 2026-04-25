import { useState } from "react";
import Header from "./components/Header";
import CsvAutomationCard from "./components/CsvAutomation";
import StatusPanel from "./components/StatusPanel";

type ActivityItem = {
  message: string;
  time: string;
};

function App() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  const addActivity = (message: string) => {
    setActivities((prev) => [
      {
        message,
        time: new Date().toLocaleTimeString(),
      },
      ...prev,
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200">

      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200">
        <Header />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* Center Automation Card */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-xl">
            <CsvAutomationCard addActivity={addActivity} />
          </div>
        </div>

        {/* Activity Panel */}
        <StatusPanel activities={activities} />

      </main>
    </div>
  );
}

export default App;