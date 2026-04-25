import { Activity } from "lucide-react";

type ActivityItem = {
  message: string;
  time: string;
};

type Props = {
  activities: ActivityItem[];
};

const StatusPanel = ({ activities }: Props) => {
  return (
    <div className="bg-white mt-10 p-8 rounded-2xl shadow-lg border border-gray-100">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <div className="bg-purple-100 p-3 rounded-xl">
          <Activity className="text-purple-600" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Activity Feed
          </h2>
          <p className="text-sm text-gray-500">
            Live automation logs
          </p>
        </div>

      </div>

      {/* Content */}
      {activities.length === 0 ? (
        <div className="bg-gray-50 p-4 rounded-lg text-gray-500 text-sm">
          No activity yet. Run an automation to see logs here.
        </div>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">

          {activities.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
            >

              {/* Dot */}
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />

              {/* Message */}
              <div className="flex-1">

                <p className="text-sm text-gray-700">
                  {item.message}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {item.time}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default StatusPanel;