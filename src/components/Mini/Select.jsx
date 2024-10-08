import { useState } from 'react';
const Select  = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("English")
    // array of options 
    const options = ['English', 'Bangla'];

    return (
      <div className='relative'>
        {/* dropdown - btn */}
        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex items-center justify-between rounded-xl cursor-pointer w-fit bg-transparent">
            <h1 className="font-bold text-gray-600">{selectedValue}</h1>
            <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
        </div>
        {/* dropdown - options  */}
        <div className={`${isOpen ? 'absolute top-4 -left-6 opacity-100' : 'absolute -left-6 top-10 opacity-0'} mx-auto my-4 rounded-xl py-4 border duration-300 bg-black w-fit transition-all`}>
            {options?.map((option, idx) => (
                <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false);}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                    {option}
                </div>
            ))}
        </div>
      </div>
    );
}
export default Select
