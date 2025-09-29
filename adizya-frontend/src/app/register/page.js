import './style.css';
import localFont from 'next/font/local'

const headerFont = localFont({
    src: '../../../public/font/silver_crown/SILVER CROWN.ttf'
})

const formFont = localFont({
    src: '../../../public/font/hellasfun/HellasFun Plain/HellasFun Plain.ttf'
})

export default function Register() {
    return (
        <div>
            <main className="px-6 grid grid-rows-3 bg-paper w-screen h-screen">
                <div className="row-span-1 flex justify-center p-12 items-center">
                    <h1 className={"tracking-wide text-8xl capitalize " + headerFont.className}>Register</h1>
                </div>
                <div className="row-span-3 flex justify-center">
                    <form className={'w-2/3 flex flex-col gap-6 text-xl text-[#D4DBF7] ' + formFont.className}>
                        <input type="text" className="ring-purple-900 bg-(--color-headers) px-4 py-4 rounded-xl focus:ring-2 outline-0 placeholder:text-(--placeholder-color)" placeholder='Your Name' required></input>
                        <input type="text" className="ring-purple-900 bg-(--color-headers) px-4 py-4 rounded-xl focus:ring-2 outline-0 placeholder:text-(--placeholder-color)" placeholder='College' required></input>
                        <input type="tel" className="ring-purple-900 bg-(--color-headers) px-4 py-4 rounded-xl focus:ring-2 outline-0 placeholder:text-(--placeholder-color)" placeholder='Phone Number' required></input>
                        <input type="email" className="ring-purple-900 bg-(--color-headers) px-4 py-4 rounded-xl focus:ring-2 outline-0 placeholder:text-(--placeholder-color)" placeholder='Email id' required></input>
                        <div className='flex items-center justify-center'>
                            <button className='p-4 bg-(--color-headers) rounded-xl text-white w-1/2 outline-none ring-purple-900 focus:ring-2'>Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}