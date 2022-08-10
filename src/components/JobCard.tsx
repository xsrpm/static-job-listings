import { Job } from "../types";

type Props = {
  job: Job;
};

export function JobCard({ job }: Props) {
  job.skills = job.languages.concat(job.tools);
  return (
    <article className='flex bg-white relative h-[16.25rem] shadow-lg mx-6 lg:h-40 lg:mx-40'>
      <div className={`w-[0.3125rem] rounded-l-xl  ${job.featured?"bg-primary": "bg-white"}`}></div>
      <div className='w-full p-[1.1875rem] rounded-r-xl flex flex-col justify-around lg:flex-row lg:justify-between lg:px-10'>
        <div className='flex flex-col justify-around gap-4 lg:flex-row lg:items-center'>
          <img className="w-12 h-12 absolute -top-6 lg:static lg:w-[5.5rem] lg:h-[5.5rem]" src={job.logo}/>
          <div className='flex flex-col justify-center gap-3'>
            <div>
              <p className="inline-block text-primary font-bold mr-6">{job.company}</p>
              <ul className='inline-flex text-white font-bold gap-2'>
                <li className={`inline bg-primary rounded-full py-1 px-2 ${job.new? "":"hidden"} `}>NEW!</li>
                <li className={`inline bg-secondary rounded-full py-1 px-2 ${job.featured? "":"hidden"} `}>FEATURED</li>
              </ul>
            </div>
              <h2 className='font-bold text-secondary active:text-primary cursor-pointer'>Senior Frontend Developer</h2>
              <ul className='flex gap-2 text-tertiary font-medium'>
                <li>{job.postedAt}</li>
                <li>•</li>
                <li>{job.contract}</li>
                <li>•</li>
                <li>{job.location}</li>
              </ul>
          </div>
        </div>
        <hr className='border-tertiary my-4 lg:hidden'/>
        <ul className='flex gap-4 items-center'>
          {
            job.skills.map((skill, index) => {
              return <li className=" inline-block font-bold text-primary bg-filter-tables rounded p-1 lg:p-2 cursor-pointer active:bg-primary active:text-white" key={index}>{skill}</li>
            })
          }
        </ul>
      </div>
     
    </article>
  );
}
