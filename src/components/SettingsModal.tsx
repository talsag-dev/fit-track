import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setReminderTime } from "@/store/notificationSlice";
import { Button } from "@/components/ui/button";
import { Settings, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [reminderTime, setReminderTimeState] = useState("12:00");

  const handleSave = () => {
    dispatch(setReminderTime(reminderTime));
    toast({
      title: "Daily reminder set",
      description: `Reminder set for ${reminderTime}`,
    });
    onClose();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-foreground" />
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Daily Reminder Time:
        </label>
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTimeState(e.target.value)}
          onClick={(e) => (e.target as HTMLInputElement).showPicker()}
          className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="default" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SettingsModal;