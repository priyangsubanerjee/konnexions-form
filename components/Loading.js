import React from "react";

function Loading({ visible }) {
  return (
    <>
      {visible && (
        <div className="fixed inset-0 h-full w-full bg-black/50 flex items-center justify-center">
          <div className="h-32 w-32 bg-white rounded-full flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
