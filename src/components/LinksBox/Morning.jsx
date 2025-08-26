

import Remembrances from "../../Remembrances.json";
import { FaCircleInfo } from "react-icons/fa6";

const Morning = () => {
    const recentRemind = Remembrances.slice(29 , 60);
    return (
        <>
            {/* <Hero /> */}
            <div className="my-10 mx-5">
                <div className="flex flex-col items-center justify-center border border-sky-500 rounded-md">
                    {/* title */}
                    <div className="bg-sky-500 rounded-md py-3 w-full">
                        <h1 className="text-center text-gray-100 font-bold text-2xl">
                            أذكار الصباح
                        </h1>
                    </div>
                    {/* الذكر */}
                    <div className="w-full">
                        {recentRemind.map((remind) => (
                            <div key={remind.id} className="mb-6">
                                <div className="flex flex-row gap-2 w-full">
                                    {/* one */}
                                    <div className="flex-1 flex flex-col px-3 py-5 bg-white rounded-md">
                                        <h1 className="py-2 text-amber-500 text-lg md:text-xl font-bold text-right">
                                            {remind.title}
                                        </h1>
                                        <div className="pb-2 flex flex-row justify-end text-right">
                                            <p className="md:text-xl md:font-normal font-bold text-gray-500">
                                                {remind.QuranicVerse}
                                            </p>
                                        </div>
                                        <div className="pt-2 flex flex-row md:justify-end  items-center">
                                            <FaCircleInfo className="text-sky-600 text-2xl mx-2" />
                                            <h3 className="font-bold text-green-600 md:text-xl ">
                                                {remind.Note}
                                            </h3>
                                        </div>
                                    </div>
                                    {/* two */}
                                    <div className="flex items-center justify-center mt-9 rounded-md bg-teal-400 md:w-[150px] w-[70px] md:h-[130px] h-[100px] m-2">
                                        <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                                            {remind.time}
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-b-gray-300 mx-3 my-5"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* article */}
            <article className=" bg-gray-100 border border-red-500 rounded-md my-10 mx-3">
            {/* title */}
            <div className="bg-red-500 rounded-md py-3">
                <h1 className="text-center font-bold md:text-2xl text-lg text-gray-100">
                    وردك اليوم
                </h1>
            </div>
            {/*  */}
            <div className=" mx-4 my-4">
                <p className=" text-gray-500 text-2xl p-5 border border-gray-300 rounded-md">
                حَدَّثَنَا أَبُو عَمَّارٍ الْحُسَيْنُ بْنُ حُرَيْثٍ حَدَّثَنَا الْفَضْلُ بْنُ مُوسَى عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ الْعُمَرِيِّ عَنْ الْقَاسِمِ بْنِ غَنَّامٍ عَنْ عَمَّتِهِ أُمِّ فَرْوَةَ وَكَانَتْ مِمَّنْ بَايَعَتْ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَتْ سُئِلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الْأَعْمَالِ أَفْضَلُ قَالَ الصَّلَاةُ لِأَوَّلِ وَقْتِهَا.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 text-2xl p-5 border border-gray-300 rounded-md">
                حَدَّثَنَا يَزِيدُ أَخْبَرَنَا بَهْزٌ عَنْ أَبِيهِ عَنْ جَدِّهِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ وَيْلٌ لِلَّذِي يُحَدِّثُ فَيَكْذِبُ لِيُضْحِكَ بِهِ الْقَوْمَ وَيْلٌ لَهُ وَيْلٌ لَهُ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 text-2xl p-5 border border-gray-300 rounded-md">
                حَدَّثَنَا ابْنُ أَبِي عُمَرَ حَدَّثَنَا سُفْيَانُ عَنْ الزُّهْرِيِّ عَنْ أَبِي خُزَامَةَ عَنْ أَبِيهِ قَالَ سَأَلْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقُلْتُ يَا رَسُولَ اللَّهِ أَرَأَيْتَ رُقًى نَسْتَرْقِيهَا وَدَوَاءً نَتَدَاوَى بِهِ وَتُ
                قَاةً نَتَّقِيهَا هَلْ تَرُدُّ مِنْ قَدَرِ اللَّهِ شَيْئًا قَالَ هِيَ مِنْ قَدَرِ اللَّهِ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ حَدَّثَنَا سَعِيدُ بْنُ عَبْدِ الرَّحْمَنِ حَدَّثَنَا سُفْيَانُ عَنْ الزُّهْرِيِّ عَنْ ابْنِ أَبِي خُزَامَةَ عَنْ أَبِيهِ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَحْوَهُ وَقَدْ رُوِيَ عَنْ ابْنِ عُيَيْنَةَ كِلْتَا الرِّوَايَتَيْنِ فَقَالَ بَعْضُهُمْ عَنْ أَبِي خِزَامَةَ عَنْ أَبِيهِ و قَالَ بَعْضُهُمْ عَنْ ابْنِ أَبِي خِزَامَةَ عَنْ أَبِيهِ وَقَدْ رَوَى غَيْرُ ابْنِ عُيَيْنَةَ هَذَا الْحَدِيثَ عَنْ الزُّهْرِيِّ عَنْ أَبِي خِزَامَةَ عَنْ أَبِيهِ وَهَذَا أَصَحُّ وَلَا نَعْرِفُ لِأَبِي خِزَامَةَ غَيْرَ هَذَا الْحَدِيثِ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
            </div>
        </article>
        </>
    );
};

export default Morning ;
