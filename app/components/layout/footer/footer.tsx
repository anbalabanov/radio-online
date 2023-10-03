"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { radioList } from "@/app/radio";
import useAudio from "@/app/hooks/useAudio";

function Footer() {
  const currentStationId = useAppSelector(
    (store) => store.stationReducer.currentStation.id,
  );

  const { playing, toggle } = useAudio(
    radioList.find(({ id }) => id === currentStationId)?.url ?? "",
  );

  return (
    <footer className="fixed inset-x-0 bottom-0 bg-no-repeat dark:bg-slate-900/75">
      <div className="shadow-lg rounded-lg">
        <div className="w-full p-6">
          <div className="grid grid-cols-3 items-center justify-end justify-items-center md:grid-cols-3 h-full">
            <div className="hover:text-sky-500 dark:hover:text-sky-400">
              <h3 className="text-2xl font-medium">A Sky Full of Stars</h3>
              <p className="text-sm mt-1">Ghost Stories</p>
            </div>
            <div
              className="p-8 rounded-full bg-red-light shadow-lg cursor-pointer hover:text-sky-500 dark:hover:text-sky-400"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {playing ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                )}
              </svg>
            </div>
            <div className="hover:text-sky-500 dark:hover:text-sky-400">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
