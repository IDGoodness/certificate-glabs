import { useCallback, useRef, useState, useEffect } from 'react';
import logo from '../../assets/genomaclabs.png';
import sign1 from '../../assets/sign1.png';
import sign2 from '../../assets/glabsSign.png';
// import usa from "../../assets/usa.png";
// import nig from "../../assets/nig.png";
import barcode from '../../assets/barcode.jpg';
import award from "../../assets/award.png"
import { toPng } from 'html-to-image';
import watermark from '../../assets/watermark.jpg';





interface Course2Props {
    header: string;
    courseTitle: string;
    description?: string;
    date: string;
    recipientName?: string;
    isPreview?: boolean;
    organizationName?: string;
    signatoryName1?: string;
    signatoryTitle1?: string;
    signatoryName2?: string;
    signatoryTitle2?: string;
}

export default function Course2({
    header = "Certificate of Completion",
    courseTitle = "Genomics of Infectious Diseases for Clinical and Public Health",
    description = "For successfully completing the 4-Day Workshop in ",
    date = "21st - 24th July 2025",
    // recipientName = "Student Name",
    // isPreview = false,
    organizationName = "Genomac Labs.",
    signatoryName1 = "Oluwaseyi Abraham Olawale",
    signatoryTitle1 = "Founder & CEO of Genomac Holdings.",
    signatoryName2 = "Blessing Afolabi",
    signatoryTitle2 = "Director, Genomac Labs"
}: Course2Props) {
    const ref = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
            name: '',
        });
    
        useEffect(() => {
            const storedName = localStorage.getItem('name');
            setFormData({
            name: storedName || '',
            });
        }, []);
    

    const onDownloadClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${formData.name?.replace(/\s+/g, '-').toLowerCase()}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch(() => {
                alert("An error occurred while generating your certificate. Please try again.");
            });
    }, [formData.name]);

    return (
        <div className="min-w-[1000px] flex flex-col justify-center items-center" >
            <div ref={ref} className="flex flex-col mt-5 justify-center items-center mx-auto bg-white relative" >
                <div className="relative w-[1000px] h-[600px] flex overflow-hidden z-10">
                        <div className="bg-gradient-to-b from-pink-400 via-purple-900 to-purple-900 w-[200px] h-[600px] flex flex-col">
                            <div className="flex pt-4">
                                <div className="mx-auto">
                                    <img src={logo} alt="logo2" className="w-20" />
                                </div>
                            </div>
                            <div className="px-2 mt-1">
                                <p className="text-white text-center text-[13px] font-medium">
                                    {organizationName}
                                </p>
                                <p className="text-white text-center font-thin text-[10px]">
                                    Predict. Prevent. Personalize.
                                </p>
                            </div>
                        </div>

                        <div className="w-[800px] h-[600px] relative bg-white">
                            <img src={watermark} alt="genes" className='absolute w-[800px] h-[600px] opacity-15 z-0 object-cover' />
                            <div className="w-[800px] h-[600px] p-6 relative z-10">
                                <div className="p-4 bg-purple-900 text-white text-3xl text-center tracking-widest uppercase">
                                    {header || "CERTIFICATE OF Participation"}
                                </div>

                                <div className="font-base text-center mt-8 italic text-lg">
                                    This Certificate is Presented to:
                                </div>

                                <div
                                    id="name"
                                    className="capitalize border-b-4 border-purple-900 pb-2 text-center text-purple-900 mx-[60px] mt-16 text-3xl font-bold"
                                >
                                    {formData.name}
                                </div>

                                <p className="capitalize py-12 text-center font-base text-sm leading-relaxed">
                                    {description}
                                    <span className="font-bold"> {courseTitle} </span>
                                    Organized by Genomac Labs.
                                </p>

                                <p className="font-bold mx-auto text-center w-[300px] -mt-10 uppercase text-lg">
                                    {date}
                                </p>

                                <div className="flex justify-between items-end mt-5 relative">
                                    <div className="w-[60px] -mt-10">
                                        <img src={barcode} alt="barcode" className="w-full" />
                                    </div>

                                    {/* Award image positioned in center */}
                                    <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                                        <img src={award} alt="award" className="w-[300px] object-contain opacity-100" />
                                    </div>

                                    <div className="flex-1 flex justify-between px-6">
                                        <div className="text-center">
                                            <div className="border-b-2 border-purple-800 w-[200px] -mt-5">
                                                <img
                                                    src={sign1}
                                                    alt="signature"
                                                    className="w-[200px] h-[150px] object-contain mx-auto -mb-10"
                                                />
                                            </div>
                                            <p className="font-bold text-base text-left mt-2">{signatoryName1}</p>
                                            <p className="text-sm text-gray-700 font-medium">{signatoryTitle1}</p>
                                        </div>

                                        <div className="text-center">
                                            <div className="border-b-2 border-purple-800 w-[200px] pb-3 -mt-5 ">
                                                <img
                                                    src={sign2}
                                                    alt="signature"
                                                    className="w-[200px] h-[150px] object-contain mx-auto -mb-12"
                                                />
                                            </div>
                                            <p className="font-bold text-base mt-2">{signatoryName2}</p>
                                            <p className="text-sm text-gray-700 font-medium">{signatoryTitle2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            
            <div className="flex justify-center mt-1">
                <button
                    className="bg-purple-600 p-2 rounded-xl hover:bg-purple-700 text-white z-10"
                    onClick={onDownloadClick}
                >
                    Download Certificate
                </button>
            </div>
        </div>
    );
}