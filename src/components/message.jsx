import { useState } from "react";
import rejectmessage from "../data/reject.json";

export default function Message() {
  const [message, setMessage] = useState("Wed Night dinner?");
  const [imageUrl, setImageUrl] = useState("assets/yes1.webp");

  const handleYesButton = () => {
    //setApproveMessage(true);
    setMessage("Lets Go!!");
    setImageUrl("/assets/yes2.png");
  };

  const handleNoButton = () => {
    const randomRejection =
      rejectmessage[Math.floor(Math.random() * rejectmessage.length)];
    setMessage(randomRejection.item);
    // Access the imageUrl
    setImageUrl(randomRejection.imageUrl);
  };

  return (
    <>
      <div className="m-28 ml-24">
        <img src={imageUrl} className="mb-8" />

        <div className="chat chat-start">
          <div className=" chat-bubble bg-pink-200 text-4xl font-bold text-orange-950 w-auto hover:-translate-x-6">
            {message}
          </div>
        </div>

        <br />

        <div className="chat chat-end">
          {" "}
          <div className=" flex flex-auto justify-center chat-bubble bg-pink-200 w-72 px-10 py-5 hover:translate-x-6">
            <button
              className="btn bg-pink-800 hover:bg-pink-600 mr-10 outline outline-pink-500 text-white "
              onClick={handleYesButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Yes
            </button>
            <button
              className="btn bg-gray-950 hover:bg-gray-700 text-white"
              onClick={handleNoButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
