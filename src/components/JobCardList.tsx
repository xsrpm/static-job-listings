
import { Job } from '../types';
import { JobCard } from './JobCard';

type Props ={
  jobList: Array<Job>
  addTag: (tag: string) => void
}

export function JobCardList({jobList, addTag}: Props) {
  return (
    <section className='flex flex-col gap-10 lg:gap-6'>
      {jobList.map((job,index) => {
        return <JobCard job={job} key={index} addTag={addTag}></JobCard>;
      })}
    </section>
  );
}
