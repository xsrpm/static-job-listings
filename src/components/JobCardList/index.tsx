import { jobList } from "../../jobList";
import { JobCard } from "../JobCard";

export function JobCardList() {
  return (
    <>
      {jobList.map((job) => {
        return <JobCard job={job}></JobCard>;
      })}
    </>
  );
}
