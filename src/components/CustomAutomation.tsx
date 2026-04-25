import { Mail } from "lucide-react";

const CustomAutomationCard = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">

      <div className="flex items-center gap-3 mb-4">

        <div className="bg-green-100 p-3 rounded-xl">
          <Mail className="text-green-600" />
        </div>

        <h2 className="text-2xl font-semibold">
          Custom Automation Builder
        </h2>

      </div>

      <p className="text-gray-600 mb-6">
        Send custom emails or trigger workflows
        directly using automation APIs.
      </p>

      <input
        type="email"
        placeholder="Enter Email"
        className="mb-3 block w-full border rounded-lg p-2"
      />

      <textarea
        placeholder="Enter Message"
        className="mb-4 block w-full border rounded-lg p-2"
        rows={3}
      />

      <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-medium">
        Run Custom Automation
      </button>

    </div>
  );
};

export default CustomAutomationCard;
