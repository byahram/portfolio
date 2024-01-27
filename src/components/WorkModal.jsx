import React from "react"; // eslint-disable-line no-unused-vars

function WorkModal({isOpen, closeModal}) {
  return (
    <div className={`workProject w-full h-full ${isOpen ? "block" : "none"}`} >
        <div className="fixed top-[1rem] right-[1rem] bottom-[1rem] left-[1rem] bg-gray-600 z-[1000]"></div>
    </div>
  );
};

export default WorkModal;
