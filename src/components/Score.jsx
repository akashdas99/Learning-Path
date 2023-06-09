const Score = ({ score, close }) => (
  <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center z-30">
    <div className="bg-indigo-500 opacity-50 w-full h-full absolute"></div>
    <div className=" bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto opacity-100">
      <div className="py-4 text-left px-6">
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">You have Score : {score} %</p>

          <div className="cursor-pointer z-50" onClick={close}>
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>
        <p>
          {score < 75
            ? `Score 75 % or more to complete the Chapter`
            : `Congrats for Completing the Chapter`}
        </p>
      </div>
    </div>
  </div>
);

export default Score;
