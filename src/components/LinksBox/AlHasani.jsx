import TheNames from "../../TheNames.json"

const AlHasani = () => {
    return (
    <>
    <section className="my-10">
        <div className="border sky-500 rounded-md text-center md:mx-10 mx-2">
            {/* title */}
            <div className="bg-sky-400 rounded-md ">
                <h1 className="text-gray-50 font-bold text-lg md:text-2xl py-3">
                    أسماء الله الحسنى
                </h1>
            </div>
            {/* body */}
                        {/* Item 1 */}
                <div className="flex flex-row items-stretch ">
                {/* Text section on right */}
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 md:gap-4 gap-2 justify-center px-10 py-8">
                        {TheNames.map((item) => (
                            <div key={item.id} className="rounded-md bg-gray-400 flex items-center justify-center w-full h-16">
                                <h2 className="text-lg text-gray-50 font-normal">
                                    {item.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                {/* Number box on left */}
                <div className="flex mt-2 justify-center rounded-md bg-teal-500 md:w-[120px] w-[50px] md:h-[1100px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                    0 
                    </p>
                </div>
            </div>
            <div className="border-b border-b-gray-200 mx-2 my-5"></div>
            <div className="text-center my-4">
                <h1 className="text-xl font-bold">
                    الأسماء الحسنى في القرآن
                </h1>
            </div>
            {/* items 2 */ }
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center  px-3 py-4">
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide pl-3">
                    قال تعالى 
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right mb-3">
                    "وَلِلّهِ الأَسْمَاء الْحُسْنَى فَادْعُوهُ بِهَا وَذَرُواْ الَّذِينَ يُلْحِدُونَ فِي أَسْمَآئِهِ سَيُجْزَوْنَ مَا كَانُواْ يَعْمَلُونَ". [الأعراف - 180]
                    </p>
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide pl-3">
                    قال تعالى 
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right mb-3">
                "قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَنَ أَيًّا مَا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنَى وَلَا تَجْهَرْ بِصَلَاتِكَ وَلَا تُخَافِتْ بِهَا وَابْتَغِ بَيْنَ ذَلِكَ سَبِيلًا". [الإسراء - 110]
                    </p>
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide pl-3">
                    قال تعالى 
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right mb-3">
                "اللَّهُ لَا إِلَهَ إِلَّا هُوَ لَهُ الْأَسْمَاءُ الْحُسْنَى". [طه - 8]
                    </p>
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide pl-3">
                    قال تعالى 
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right mb-2">
                        "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ". [الحشر - 24]
                    </p>
                    <div className="my-4 text-right">
                        <h1 className="text-xl font-bold">
                            الأسماء الحسنى في الحديث
                        </h1>
                    </div>
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide pl-3">
                    قال تعالى 
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right mb-2">
                        "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ". [الحشر - 24]
                    </p>
                </div>
                {/* Number box on left */}
                <div className="flex pt-4 justify-center  rounded-md bg-teal-500 md:w-[120px] w-[50px] md:h-[550px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-4xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
            {/*  */}
                      {/* article */}
        <article className=" bg-gray-100 border border-red-500 rounded-md my-10 mx-10">
            {/* title */}
            <div className="bg-red-500 rounded-md py-3">
                <h1 className="text-center font-bold md:text-2xl text-lg text-gray-100">
                    وردك اليوم
                </h1>
            </div>
            {/*  */}
            <div className=" mx-4 my-4">
                <p className=" text-gray-500 md:text-2xl text-lg text-right p-4 border border-gray-300">
                        حَدَّثَنَا أَحْمَدُ بْنُ حَنْبَلٍ حَدَّثَنَا عَفَّانُ حَدَّثَنَا حَمَّادُ بْنُ سَلَمَةَ أَخْبَرَنَا حُمَيْدٌ عَنْ بَكْرِ بْنِ عَبْدِ اللَّهِ عَنْ ابْنِ عُمَرَ وَأَيُّوبُ عَنْ نَافِعٍ عَنْ ابْنِ عُمَرَ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَلَّى الظُّهْرَ وَالْعَصْرَ وَالْمَغْرِبَ وَالْعِشَاءَ بِالْبَطْحَاءِ ثُمَّ هَجَعَ بِهَا هَجْعَةً ثُمَّ دَخَلَ مَكَّةَ وَكَانَ ابْنُ عُمَرَ يَفْعَلُهُ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 md:text-2xl text-lg text-right p-4 border border-gray-300">
                        حَدَّثَنَا يَحْيَى بْنُ حَكِيمٍ حَدَّثَنَا أَبُو دَاوُدَ حَدَّثَنَا زُهَيْرٌ عَنْ أَبِي إِسْحَقَ عَنْ الْحَارِثِ عَنْ عَلِيٍّ قَالَ إِنَّ مِنْ السُّنَّةِ أَنْ يُمْشَى إِلَى الْعِيدِ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 md:text-2xl text-lg text-right p-4 border border-gray-300">
                    حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا وُهَيْبٌ عَنْ يُونُسَ عَنْ الْحَسَنِ أَنَّ نَبِيَّ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ مَنْ قَرَأَ فِي لَيْلَةٍ مِائَةَ آيَةٍ لَمْ يُحَاجَّهُ الْقُرْآنُ تِلْكَ اللَّيْلَةَ وَمَنْ قَرَأَ فِي لَيْلَةٍ مِائَتَيْ آيَةٍ كُتِبَ لَهُ قُنُوتُ لَيْلَةٍ وَمَنْ قَرَأَ فِي لَيْلَةٍ خَمْسَ مِائَةِ آيَةٍ إِلَى الْأَلْفِ أَصْبَحَ وَلَهُ قِنْطَارٌ فِي الْآخِرَةِ قَالُوا وَمَا الْقِنْطَارُ قَالَ اثْنَا عَشَرَ أَلْفًا.
                </p>
            </div>
        </article>
        </div>
    </section>
    </>
)
}

export default AlHasani
