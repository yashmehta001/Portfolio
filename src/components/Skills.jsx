import { useEffect, useState } from "react";
import { getSkills } from "../services/getSkills";

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkills(data);
    }
    fetchSkills();
  }, []);
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I&rsquo;ve worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          {skills.map(({ id, title, img, shadow, alt }) => (
            <div
              className={`shadow-md hover:scale-110 duration-300 ${shadow}`}
              key={id}
            >
              <img className="w-20 mx-auto py-3" src={img} alt={alt} />
              <p className="my-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
