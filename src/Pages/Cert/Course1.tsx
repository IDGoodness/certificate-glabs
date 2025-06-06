import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../../assets/genomaclabs.jpg';
import sign1 from '../../assets/sign1.png';
import sign2 from '../../assets/glabsSign.png';
import award from '../../assets/award.png';
import award1 from '../../assets/ribbonDeco.png';
import { toPng } from 'html-to-image';
import watermark from '../../assets/watermark.jpg';

const Course1 = () => {
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-certificate.png';
                link.href = dataUrl;
                link.click();
            })
            .catch(() => {
                alert("An error occurred while generating your certificate. Please try again.");
            });
    }, [ref]);

    const [formData, setFormData] = useState({
        name: '',
    });

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        setFormData({
        name: storedName || '',
        });
    }, []);

    return (
        <>
            <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
                <div
                ref={ref}
                className="flex flex-col justify-center items-center bg-white relative"
                >
                    <img src={watermark} alt="genes" className='absolute w-[1000px] -mt-52 h-[800px] opacity-30 z-0 ' />
                    <div className="relative w-[1000px] h-[600px] border-[20px] m-10 border-purple-600 flex">
                        <div className="flex flex-col mx-auto">
                            <div className="flex text-center mx-auto ">
                                <p className=" ">
                                    <img src={logo} alt="logo" className="w-[80px]" />
                                </p>
                            </div>

                            <div className="text-center mx-auto">
                                <p className="uppercase font-semibold text-3xl">
                                    certificate of participation
                                </p>
                                <p className="text-center italic font-bold">
                                    this is to certify that:
                                </p>
                            </div>

                            <div className="text-center mx-auto pt-10 pb-10 w-[1000px] h-[200px] mt-5">
                                <p className="text-4xl font-semibold border-b-2 mx-[200px] mb-1 border-purple-800 ">
                                {formData.name}
                                </p>
                                <p className="mx-28 pt-5 text-xl ">
                                    Attended <span className='font-bold italic text-2xl' >Bioinformatic Tools and Handling of Genomic Data</span> workshop organised by Genomac Labs.
                                </p>
                                <p className="font-bold text-[20px] "> 5TH JUNE 2025</p>
                            </div>

                            <div className="flex justify-between mx-28">
                                <div className="">
                                    <p className="border-b-2 border-purple-800 w-[200px]">
                                        <img
                                        src={sign1}
                                        alt="signature"
                                        className="w-[200px] h-[150px] -mb-10"
                                        />
                                    </p>
                                    <p className="text-lg font-semibold">
                                        Oluwaseyi Abraham Olawale
                                    </p>
                                    <p className="text-sm text-center font-medium">
                                        Founder & CEO of Genomac Holdings.
                                    </p>
                                </div>

                                <div className="w-[400px] h-auto -mt-[30px] -ml-[400px] -mr-[320px] z-10">
                                    <img src={award} alt="award" />
                                </div>

                                <div className="mt-2">
                                    <p className="border-b-2 border-purple-800 w-52">
                                        <img
                                        src={sign2}
                                        alt="signature"
                                        className="w-[200px] h-[150px] -mb-12"
                                        />
                                    </p>
                                    <p className="text-lg text-center font-semibold">
                                        Blessing Afolabi
                                    </p>
                                    <p className="text-sm text-center font-medium">
                                        Director, Genomac Labs
                                    </p>
                                </div>
                            </div>

                            <div className="w-[150px] absolute top-8 left-14">
                                <img src={award1} alt="award" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center -mt-9">
                <button
                className="bg-purple-600 p-2 rounded-xl hover:bg-purple-700 text-white z-10"
                onClick={onButtonClick}
                >
                Download Certificate
                </button>
            </div>
        </>
    );
}

export default Course1;