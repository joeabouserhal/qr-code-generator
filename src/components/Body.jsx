import React from 'react'

const Body = () => {
    return (
        <div className='pt-[4vh] flex justify-center'>
            <div className='flex-col'>
                <h1 className='text-center text-xl p-[2vh] font-bold'>QR Code Generator</h1>
                <p className='max-w-md text-center p-[1vh]'>This is a website where you can enter some text or a url and turn it into a qr code</p>
                <form className='flex flex-col'>
                    <input type="text" id="url" placeholder="Enter your text or URL here" className='w-[70vh] h-[5vh] px-[2vh] m-[2vh] bg-gray-200 rounded-[1vh] outline-none' />
                    <select id="size" className='w-[70vh] h-[5vh] px-[2vh] m-[2vh] bg-gray-200 rounded-[1vh] outline-none'>
                        <option value="100x100">100x100</option>
                        <option value="200x200">200x200</option>
                        <option value="300x300" selected>300x300</option>
                        <option value="400x400">400x400</option>
                        <option value="500x500">500x500</option>
                        <option value="600x600">600x600</option>
                        <option value="700x700">700x700</option>
                    </select>
                    <input type="submit" value="Generate" className='bg-gray-700 p-[1vh] w-min m-auto inset-x-auto text-white rounded-[1vh]'/>
                </form>
            </div>
        </div>
    )
}

export default Body