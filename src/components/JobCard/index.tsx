import { Job } from "../../types";

type Props = {
  job: Job;
};

export function JobCard({ job }: Props) {
  job.skills = job.languages.concat(job.tools);
  return (
    <article className='flex bg-white relative h-[16.25rem]'>
      <div className={`w-[0.3125rem] rounded-l-xl  ${job.featured?"bg-primary": "bg-white"}`}></div>
      <div className='w-full p-[1.1875rem] rounded-r-xl flex flex-col justify-around'>
      <img className="w-12 h-12 absolute -top-6" src={job.logo}/>
      <div>
        <p className="inline-block text-primary font-bold mr-6">{job.company}</p>
        <ul className='inline-flex text-white font-bold gap-2'>
          <li className={`inline bg-primary rounded-full py-1 px-2 ${job.new? "":"hidden"} `}>NEW!</li>
          <li className={`inline bg-secondary rounded-full py-1 px-2 ${job.featured? "":"hidden"} `}>FEATURED</li>
        </ul>
      </div>


      <h2 className='font-bold text-secondary'>Senior Frontend Developer</h2>
      <ul className='flex gap-2 text-tertiary font-medium'>
        <li>{job.postedAt}</li>
        <li>•</li>
        <li>{job.contract}</li>
        <li>•</li>
        <li>{job.location}</li>
      </ul>
      <hr className='border-tertiary my-4'/>
      <ul className='flex gap-4'>
        {
          job.skills.map((skill, index) => {
            return <li className=" inline-block font-semibold text-primary bg-filter-tables rounded p-1" key={index}>{skill}</li>
          })
        }
      </ul>
      </div>
     
    </article>
  );
}
