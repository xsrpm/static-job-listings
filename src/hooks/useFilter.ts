import { useState } from 'react';
import { jobList as initialJobList } from "../jobList";
import { Job } from '../types';

export function useFilter(){
  initialJobList.forEach((job: Job) => {
    job.tags = [job.role, job.level, ...job.languages, ...job.tools];
  });
    const [tags, setTags] = useState<Array<string>>([])
    const [jobList] = useState<Array<Job>>(initialJobList)
    const [filteredList, setFilteredList] = useState<Array<Job>>(jobList)

    const removeTag= (tag: string) => {
        const newTags = tags.filter((item) => item !== tag)
        setTags(newTags)
        setFilteredList(jobList.filter((job) => {
            return newTags.every((tag) => job.tags?.includes(tag))
        })) 
      }
    
      const addTag = (tag: string) => {
        if(tags.includes(tag)) return
        const newTags = [...tags, tag]
        setTags(newTags)
        setFilteredList(jobList.filter((job)=>{
          return  newTags.every((tag) => job.tags?.includes(tag))
        })) 
      }
    
      const clearTags= () => {
        setTags([])
        setFilteredList(jobList)
      }

      return {
        tags,
        removeTag,
        addTag,
        clearTags,
        filteredList
      }
}

