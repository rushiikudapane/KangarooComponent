import React from "react";
import { IoExpand } from "react-icons/io5";
import { SlMagnifierAdd } from "react-icons/sl";
import { SlMagnifierRemove } from "react-icons/sl";
import { TbTargetOff } from "react-icons/tb";
import { TbAffiliate } from "react-icons/tb";
import { VscGitMerge } from "react-icons/vsc";
import { FiCamera } from "react-icons/fi";
import { MdOutlineAccountTree } from "react-icons/md";

import "./Kangaroo.css";

const Kangaroo = () => {
  return (
    <div>
      <div className="container1"></div>
      <div className="container2">
        <button className="btn">
          <IoExpand className="icons" />
        </button>
        <button className="btn">
          <SlMagnifierAdd className="icons" />
        </button>
        <button className="btn">
          <SlMagnifierRemove className="icons" />
        </button>
        <button className="btn">
          <TbTargetOff className="icons" />
        </button>
        <button className="btn">
          <TbAffiliate className="icons" />
        </button>
        <button className="btn">
          <MdOutlineAccountTree className="icons" />
        </button>
        <button className="btn">
          <VscGitMerge className="icons" />
        </button>
        <button className="btn">
          <FiCamera className="icons" />
        </button>
      </div>
    </div>
  );
};

export default Kangaroo;
