import { Upload } from "lucide-react";
import { useState } from "react";

type Props = {
  addActivity: (text: string) => void;
};

const CsvAutomationCard = ({ addActivity }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      addActivity("⚠️ No file selected");
      return;
    }

    setLoading(true);

    addActivity("📤 Upload started");

    const formData = new FormData();
    formData.append("data", file);

    try {
      addActivity("⚙️ Processing automation...");

      await fetch("http://localhost:5678/webhook-test/csv-automation", {
        method: "POST",
        body: formData,
      });

      addActivity("✅ Emails sent successfully");

    } catch (err) {
      addActivity("❌ Automation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border">

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 p-3 rounded-xl">
          <Upload className="text-blue-600" />
        </div>

        <h2 className="text-2xl font-semibold">
          CSV Email Automation
        </h2>
      </div>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          if (e.target.files?.[0]) {
            addActivity(`📄 File selected: ${e.target.files[0].name}`);
          }
        }}
        className="mb-4 w-full border p-2 rounded-lg"
      />

      <div className="flex justify-center">
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:scale-[1.02] transition"
        >
          {loading ? "Running..." : "Run Automation"}
        </button>
      </div>

    </div>
  );
};

export default CsvAutomationCard;