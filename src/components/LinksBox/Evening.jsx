
import Remembrances from "../../Remembrances.json";
import { FaCircleInfo } from "react-icons/fa6";

const Evening = () => {
    const recentRemind = Remembrances.slice(0, 29);
    return (
        <>
            {/* <Hero /> */}
            <div className="my-10 mx-5">
                <div className="flex flex-col items-center justify-center border border-sky-500 rounded-md">
                    {/* title */}
                    <div className="bg-sky-500 rounded-md py-3 w-full">
                        <h1 className="text-center text-gray-100 font-bold text-2xl">
                            أذكار المساء
                        </h1>
                    </div>
                    {/* الذكر */}
                    <div className="w-full">
                        {recentRemind.map((remind) => (
                            <div key={remind.id} className="mb-6">
                                <div className="flex flex-row items-stretch gap-3 w-full">
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
                {/* article */}
                <article>
            <article className=" bg-gray-100 border border-red-500 rounded-md my-10">
            {/* title */}
            <div className="bg-red-500 rounded-md py-3">
                <h1 className="text-center font-bold md:text-2xl text-lg text-gray-100">
                    وردك اليوم
                </h1>
            </div>
            {/*  */}
            <div className=" mx-4 my-4">
                <p className=" text-gray-500 text-2xl p-5 border border-gray-300 rounded-md">
                حَدَّثَنَا أَحْمَدُ بْنُ حَنْبَلٍ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ عَنْ مُحَمَّدِ بْنِ عَمْرٍو عَنْ أَبِي سَلَمَةَ عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 text-2xl p-5 border border-gray-300 rounded-md">
                حَدَّثَنِي مُحَمَّدُ بْنُ أَبِي بَكْرٍ حَدَّثَنَا فُضَيْلُ بْنُ سُلَيْمَانَ حَدَّثَنَا مُوسَى بْنُ عُقْبَةَ حَدَّثَنَا سَالِمُ بْنُ عَبْدِ اللَّهِ عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ
                وَسَلَّمَ لَقِيَ زَيْدَ بْنَ عَمْرِو بْنِ نُفَيْلٍ بِأَسْفَلِ بَلْدَحٍ قَبْلَ أَنْ يَنْزِلَ عَلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْوَحْيُ فَقُدِّمَتْ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ سُفْرَةٌ فَأَبَى أَنْ يَأْكُلَ مِنْهَا ثُمَّ قَالَ زَيْدٌ إِنِّي لَسْتُ آكُلُ مِمَّا تَذْبَحُونَ عَلَى أَنْصَابِكُمْ وَلَا آكُلُ إِلَّا مَا ذُكِرَ اسْمُ اللَّهِ عَلَيْهِ وَأَنَّ زَيْدَ بْنَ عَمْرٍو كَانَ يَعِيبُ عَلَى قُرَيْشٍ ذَبَائِحَهُمْ وَيَقُولُ الشَّاةُ خَلَقَهَا اللَّهُ وَأَنْزَلَ لَهَا مِنْ السَّمَاءِ الْمَاءَ وَأَنْبَتَ لَهَا مِنْ الْأَرْضِ ثُمَّ تَذْبَحُونَهَا عَلَى غَيْرِ اسْمِ اللَّهِ إِنْكَارًا لِذَلِكَ وَإِعْظَامًا لَهُ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
            </div>
        </article>
                </article>
            </div>
        </>
    );
};

export default Evening;