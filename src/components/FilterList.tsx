export function FilterList(){
    return (
<section className="rounded-xl shadow-lg flex justify-between p-6 bg-white relative -top-10 mx-6 lg:mx-40 lg:px-10">
    <ul className='flex flex-wrap gap-4 text-primary'>
        <li className='bg-filter-tables rounded-l-md'><span className=' px-2 font-bold'>Frontend</span><button className='bg-primary p-2 rounded-r-md active:bg-secondary'><img src="./images/icon-remove.svg" /></button></li>
        <li className='bg-filter-tables rounded-l-md '><span className='px-2 font-bold'>CSS</span><button className='bg-primary p-2 rounded-r-md active:bg-secondary'><img src="./images/icon-remove.svg" /></button></li>
        <li className='bg-filter-tables rounded-l-md '><span className="px-2 font-bold">Javascript</span><button className='bg-primary p-2 rounded-r-md active:bg-secondary'><img src="./images/icon-remove.svg" /></button></li>
    </ul>
    <button className='font-bold text-tertiary active:underline active:text-primary'>Clear</button>
</section>
        )
}
