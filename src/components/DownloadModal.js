import { motion } from 'framer-motion';

export default function DownloadModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4"
      >
        <h2 className="text-lg font-semibold">Download Resume</h2>
        <p className="text-gray-600">
          Do you want to download Clement Samuel Marly's resume?
        </p>
        <div className="flex justify-end space-x-4 mt-4">
          <button onClick={onCancel} className="text-gray-500 hover:underline">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
          >
            Download
          </button>
        </div>
      </motion.div>
    </div>
  );
}
