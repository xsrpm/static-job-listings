type Props = {
    tags: Array<string>
    removeTag: (filter: string) => void
    clearTags: () => void
}

export function FilterList({tags, removeTag, clearTags}: Props){
    return (
<section className={`rounded-xl shadow-lg flex justify-between p-6 bg-white relative -top-10 mx-6 lg:mx-40 lg:px-10 ${tags.length === 0 ? "invisible": "visible" }`}>
    <ul className='flex flex-wrap gap-4 text-primary'>
        {
            tags.map((tag, index) => {
                return (
                    <li key={index} className='bg-filter-tables rounded-l-md'>
                        <span className=' px-2 font-bold'>{tag}</span><button className='bg-primary p-2 rounded-r-md active:bg-secondary' onClick={()=>removeTag(tag)}><img src="./images/icon-remove.svg" /></button>
                    </li>
                );
            })
        }
    </ul>
    <button className='font-bold text-tertiary active:underline active:text-primary' onClick={clearTags}>Clear</button>
</section>
        )
}
