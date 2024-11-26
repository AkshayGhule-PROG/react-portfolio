import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="text-4xl my-20 text-center">Experiences</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Left side: Year Range */}
            <div className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            {/* Right side: Experience details */}
            <div className="w-full max-w-xl lg:3/4">
              <h6 className="mb-2 font-semibold">{experience.role} -{" "}
                <span className='text-sm text-purple-100'>
                    {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-3">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
