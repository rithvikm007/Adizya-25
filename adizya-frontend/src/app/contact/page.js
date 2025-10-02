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
            <main className="px-6 grid grid-rows-3 bg-paper w-full h-screen">
                <div className="row-span-1 flex justify-start p-12 items-center">
                    <h1 className={"tracking-wide text-8xl capitalize " + headerFont.className}>Contact Us</h1>
                </div>
                <div className={'px-12 text-3xl gap-4 flex flex-col text-[#19213E] ' + formFont.className}>
                    <a>Instagram - @adizya25</a>
                    <a>LinkedIn -</a>
                    <a>email - </a>
                    <a>facebook - </a>
                </div>
            </main>
        </div>
    )
}