import { Avatar, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddProjectModal from "./Modals/AddProjectModal";
import { useRouter } from "next/router";

function RenderProjects({ projects }) {
  const router= useRouter()
  // to open add project moadal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // colors for avtar fallback
  let colors = ["#7E22CE","#F8A01D","#6366F1","#F8A01D","#6366F1","#7E22CE","#7E22CE","#6366F1","#F8A01D","#7E22CE","#F8A01D","#6366F1","#F8A01D","#6366F1","#7E22CE","#7E22CE","#6366F1","#F8A01D"];

  return (
    <div className="max-w-[1170px] mx-auto ">
      <div className="flex items-start flex-col  sm:flex-row sm:justify-between sm:items-center mb-[20px]">
        <h2 className="text-[#7E22CE] text-[60px] font-bold">Projects</h2>
        <button
          onClick={onOpen}
          className="flex items-center gap-3  text-white  px-[15px] py-[7px] rounded-[10px] text-[22px] bg-black hover:text-black hover:bg-white hover:border-[2px] border-black"
        >
          <FiPlusCircle size={"25px"} />
          Create New Project
        </button>
      </div>
      <div className="flex flex-col gap-x-[4%] gap-y-[40px] sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, ind) => (
          <div onClick={()=>router.push(`/project/Upload?id=${project._id}`)}  key={ind}
            id="box-shadow"
            className="flex gap-5 cursor-pointer items-center rounded-[10px] p-[10px] border-2 border-gray hover:border-purple-400"
          >
            <Avatar
              borderRadius={10}
              fontSize="3rem"
              fontWeight={"800"}
              color={"white"}
              width={"100px"}
              height={"100px"}
              bg={colors[ind]}
              name={project.name}
              src={project.image}
            />
            <div>
              <h4 className="text-25px font-bold capitalize text-[#7E22CE]">
                {project.name}
              </h4>
              <p className="text-15px">{project.podcast.length} Episodes</p>
            </div>
          </div>
        ))}
      </div>

      {/* add project modal */}
      <AddProjectModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default RenderProjects;
