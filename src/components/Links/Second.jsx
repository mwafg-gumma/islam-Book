import Hero from "../Hero"
import Footer from "../Footer"
const Second = () => {
return (
    <>
    <Hero />
    <section className="px-12 pt-10 bg-gray-200 pb-20">
        <div className="rounded-md border border-sky-500">
            <div className="bg-sky-400 rounded-md p-3">
                <h1 className="text-center text-gray-100 font-bold text-lg md:text-2xl">
                    أذكار دخول وخروج الخلاء
                </h1>
            </div>
            {/* 1 */}
            <div className="flex flex-row justify-end">
                <div className="mx-2">
                    <h2 className="text-yellow-500 text-lg md:text-2xl flex flex-row justify-end  py-3 ">
                        الذكر عند الخلاء
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-800 ml-3 md:ml-0">
                        (بِسْمِ الله) اللّهُـمَّ إِنِّـي أَعـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبائِث.
                    </p>
                </div>
                {/* number */}
                    <div className="bg-teal-400 text-center rounded-md mx-2 my-2 w-[150px]">
                    <h3>
                        <p className="font-bold text-gray-100 my-3 text-3xl text-center">
                            1
                        </p>
                        <p className="text-gray-100 p-3">
                            مره واحده
                        </p>
                    </h3>
                </div>
            </div>
            <div className="border-b border-b-gray-300 my-3 mx-2"></div>
            {/* 2 */}
                    <div className="flex flex-row justify-end gap-3">
                <div className="mx-2">
                    <h2 className="text-yellow-500 text-lg md:text-2xl flex flex-row ml-4 md:-0 lg:ml-0 justify-end py-3 ">
                    الذكر بعد الخروج من الخلاء
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-800 flex flex-row justify-end mx-2">
                        غُفْـرانَك
                    </p>
                </div>
                {/* number */}
                    <div className="bg-teal-400 text-center rounded-md mx-2 my-2 md:w-[150px]">
                    <h3>
                        <p className="font-bold text-gray-100 my-3 text-3xl text-center">
                            1
                        </p>
                        <p className="text-gray-100 p-3">
                            مره واحده
                        </p>
                    </h3>
                </div>
            </div>
            {/*  */}
        </div>
        {/* article */}
        <article className=" bg-gray-100 border border-red-500 rounded-md my-10">
            {/* title */}
            <div className="bg-red-500 rounded-md py-3">
                <h1 className="text-center font-bold md:text-2xl text-lg text-gray-100">
                    وردك اليوم
                </h1>
            </div>
            {/*  */}
            <div className=" mx-4 my-4">
                <p className=" text-gray-500 text-2xl p-2">
                    أَخْبَرَنَا أَحْمَدُ بْنُ سُلَيْمَانَ قَالَ حَدَّثَنَا أَبُو نُعَيْمٍ قَالَ أَنْبَأَنَا زُهَيْرٌ عَنْ أَبِي إِسْحَقَ عَنْ الْمُسَيَّبِ بْنِ رَافِعٍ عَنْ عَنْبَسَةَ أَخِي أُمِّ حَبِيبَةَ عَنْ أُمِّ حَبِيبَةَ قَالَتْ مَنْ صَلَّى فِي الْيَوْمِ وَاللَّيْلَةِ ثِنْتَيْ عَشْرَةَ
                    رَكْعَةً سِوَى الْمَكْتُوبَةِ بُنِيَ لَهُ بَيْتٌ فِي الْجَنَّةِ أَرْبَعًا قَبْلَ الظُّهْرِ وَرَكْعَتَيْنِ بَعْدَهَا وَثِنْتَيْنِ قَبْلَ الْعَصْرِ وَثِنْتَيْنِ بَعْدَ الْمَغْرِبِ وَثِنْتَيْنِ قَبْلَ الْفَجْرِ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 text-2xl p-2">
                حَدَّثَنَا الْحُسَيْنُ بْنُ الْحَسَنِ الْمَرْوَزِيُّ أَنْبَأَنَا عَبْدُ اللَّهِ بْنُ الْمُبَارَكِ وَابْنُ عُلَيَّةَ عَنْ عُيَيْنَةَ بْنِ عَبْدِ الرَّحْمَنِ عَنْ أَبِيهِ 
                عَنْ أَبِي بَكْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَا مِنْ ذَنْبٍ أَجْدَرُ أَنْ يُعَجِّلَ اللَّهُ لِصَاحِبِهِ الْعُقُوبَةَ فِي الدُّنْيَا مَعَ مَا يَدَّخِرُ لَهُ فِي الْآخِرَةِ مِنْ الْبَغْيِ وَقَطِيعَةِ الرَّحِمِ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
            </div>
        </article>
    </section>
    <Footer />
    </>
)
}

export default Second
