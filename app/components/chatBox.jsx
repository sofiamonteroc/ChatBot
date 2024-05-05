"use client";

import Button from "./button";
import { useState } from "react";

const ChatBox = ({ localTime, id, message, options, clickedOptionPage }) => {
  const clickedOption = (next, label) => {
    clickedOptionPage(next, label);
    setSelectDisabled(true);
  };

  const [selectDisabled, setSelectDisabled] = useState(false);
  return (
    <>
      {id != undefined ? (
        <div className="flex mb-2 max-w-[70%]">
          <div className="rounded py-2 px-3 bg-secundary">
            <p className="py-1">{message}</p>

            {options != undefined &&
              options.map((e) => {
                return (
                  <Button
                    key={e.value}
                    label={e.label}
                    next={e.next}
                    clickedOption={clickedOption}
                    disabled={selectDisabled}
                  />
                );
              })}
            <p className="text-right text-xs text-grey-dark mt-1">
              {localTime}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-end mb-2">
          <div className="rounded py-1 px-3 bg-user">
            <p className="font-semibold uppercase text-white">{message}</p>
            <p className="text-right text-xs text-grey-dark">{localTime}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
