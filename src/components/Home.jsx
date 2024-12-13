import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPaste } from "../redux/pasteSlice.js";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(30),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    // after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <>
      <div>
        <input
          className="p-2 rounded-2xl bg-slate-600 border-black mt-10 w-[37%] ml-[15%]"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="p-2 rounded-2xl bg-slate-600 border-black mt-10 ml-[20%]"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="p-2 rounded-2xl bg-slate-600 border-black mt-10 w-[80%] ml-[10%] mr-[10%]"
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </>
  );
};

export default Home;
