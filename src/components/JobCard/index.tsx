import { Job } from "../../types";

type Props = {
  job: Job;
};

export function JobCard({ job }: Props) {
  return (
    <article>
      <picture>
      <img src={job.logo}/>
      </picture>

      <p>{job.company}</p>
      <ul>
        <li>NEW!</li>
        <li>FEATURED</li>
      </ul>

      <h2>Senior Frontend Developer</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li>Frontend</li>
        <li>Senior</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </article>
  );
}
