import { jobList } from "../jobList";
import { JobCard } from './JobCard';

export function JobCardList() {
  return (
    <section className='flex flex-col gap-10 lg:gap-6'>
      {jobList.map((job,index) => {
        return <JobCard job={job} key={index}></JobCard>;
      })}
    </section>
  );
}
