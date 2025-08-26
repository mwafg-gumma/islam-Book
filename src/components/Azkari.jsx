import { FaSliders } from "react-icons/fa6"

const Azkari = () => {
    return (
    <>
    <section className="mx-8  my-20 border border-sky-700 rounded-md">
        <div className="flex flex-row justify-center items-center bg-sky-500 rounded-md p-3 text-center">
            <h1 className="flex-1 text-center font-bold md:text-2xl text-xl  text-white order-1 ">
                أدعية الأنبياء من القرآن الكريم
            </h1>
            {/* icon */}
            <div className="order-2 ml-auto bg-red-500 rounded-md  ">
                <FaSliders className="w-10 h-10 p-2 text-gray-100 cursor-pointer hover:text-gray-200 transition duration-300 ease-in-out" />
                </div>
        </div>
        {/* for the first row */}
        <div className="grid grid-cols-1 ">
            {/* 1 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ" <span className="text-gray-400 text-lg font-normal mx-2">[الأعراف - 23]</span>
                    </p>  
                        <p className="text-green-500 text-xl text-right mx-3">
                    آدم علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 2 */}
            <div className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا" <span className="text-gray-500 font-normal mx-2 text-lg">[نوح - 28]</span>
                    </p >
                        <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    " رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلاَّ تَغْفِرْ لِي وَتَرْحَمْنِي أَكُن مِّنَ الْخَاسِرِينَ". <span className="text-gray-500 font-normal mx-2 text-lg">[هود - 47].</span>
                    </p >
                        <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَّبِّ أَنزِلْنِي مُنزَلاً مُّبَارَكاً وَأَنتَ خَيْرُ الْمُنزِلِينَ" <span className="text-gray-500 font-normal mx-2 text-xl">[المؤمنون - 29]</span>
                    </p >
                        <p className="text-green-500 text-xl  text-right mx-3 mt-5">
                    نوح علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 3 */}
            <div className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ (127) رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ (128)" <span className="text-gray-500 font-nonormal mx-2 text-lg">[البقرة - 127-128]</span>
                    </p >
                        <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ (40) رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ (41)" <span className="text-gray-500 font-nonormal mx-2 text-lg">[إبراهيم - 40-41]</span>
                    </p  >
                        <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ (83) وَاجْعَل لِّي لِسَانَ صِدْقٍ فِي الْآخِرِينَ (84) وَاجْعَلْنِي مِن وَرَثَةِ جَنَّةِ النَّعِيمِ (85)" <span className="text-gray-500 font-normal mx-2 text-lg">[الشعراء - 83-85]</span>
                    </p >
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ (4) رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ  إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ (5)" <span className="text-gray-500 font-normal mx-2 text-lg">[الممتحنة - 4-5]</span>
                    </p >
                        <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ"   <span className="text-gray-500 font-normal mx-2 text-xl">[الصافات - 100]</span>
                    </p> 
                        <p className="text-green-500 text-xl  text-right mx-3 mt-5">
                إبراهيم علية السلام  
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
                  {/* 4 */}
            <div className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم ۚ مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا ۚ إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ" <span className="text-gray-500 font-normal mx-2 text-lg">[هود - 56]</span>
                    </p >
                            <p className="text-green-500 text-xl  text-right mx-3 mt-5">
                    هود علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 6 */}
                <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2">[العنكبوت - 30]</span>
                    </p>
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ" <span className="text-gray-400 text-lg font-nonormal mx-2">[الشعراء - 169]</span>
                    </p >
                        <p className="text-green-500 text-xl text-right mx-3">
                    لوط علية السلام
                </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 7 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2">[يوسف - 101]</span>
                    </p >
                        <p className="text-green-500 text-xl text-right mx-3">
                    يوسف علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 8 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    سِعَ رَبُّنَا كُلَّ شَيْءٍ عِلْماً عَلَى اللّهِ تَوَكَّلْنَا رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2">[الأعراف - 89]</span>
                    </p >
                        <p className="text-green-500 text-xl text-right mx-3">
                        شعيب علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 9 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي" <span className="text-gray-400 text-lg font-nonormal mx-2"> [القصص - 16]</span>
                    </p >
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ بِمَا أَنْعَمْتَ عَلَيَّ فَلَنْ أَكُونَ ظَهِيراً لِّلْمُجْرِمِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2"> [القصص - 17]</span>
                    </p >
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ" <span className="text-gray-400 text-lg font-nonormal mx-2"> [القصص - 24]</span>
                    </p  >
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبِّ اشْرَحْ لِي صَدْرِي (25) وَيَسِّرْ لِي أَمْرِي (26) وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي (27) يَفْقَهُوا قَوْلِي (28)"<span className="text-gray-400 text- font-nonormal mx-2"> [طه - 25-28]</span>
                    </p >
                        <p className="text-green-500 text-xl text-right mx-3">
                    موسى علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 10 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2"> [الأنبياء - 83]</span>
                    </p >
                    <p className="text-green-500 text-xl text-right mx-3">
                        أيوب علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 11 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2" >[النمل - 19]</span>
                    </p >
                        <p className="text-green-500 text-xl text-right mx-3">
                        سليمان علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 12 */}
                <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2" >[النمل - 19]</span>
                    </p>
                    <p className="text-green-500 text-xl text-right mx-3">
                        سليمان علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 13 */}
            <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                " لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2" > [الأنبياء - 87]</span>
                    </p >
                        <p className="text-green-500 text-xl text-right mx-3">
                        سليمان علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
                    <h3>
                        <p className="font-bold text-gray-100 my-3 text-3xl text-center">
                            1
                        </p>
                        <p className="text-gray-100 p-3">
                            يونس علية السلام
                        </p>
                    </h3>
                </div>
            </div>
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 14 */}
                <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                    "رَبِّ هَبْ لِي مِن لَّدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاء" <span className="text-gray-400 text- font-nonormal mx-2" >[آل عمران - 38]</span>
                    </p >             
                <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "رَبِّ لَا تَذَرْنِي فَرْداً وَأَنتَ خَيْرُ الْوَارِثِينَ" <span className="text-gray-400 text-lg font-nonormal mx-2" >[الأنبياء - 89]</span>
                    </p>  
                    <p className="text-green-500 text-xl text-right mx-3">
                        زكريا علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/* 15 */}
                    <div  className="flex flex-row  justify-end pb-2 my-3">
                {/* الذكر */}
                <div className="p-2">
                    <p className="text-slate-700 font-bold p-2 text-right text-xl">
                "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ" <span className="text-gray-400 text-lg font-nonormal mx-2" >[يوسف - 86]</span>
                        </p  >           
                    <p className="text-green-500 text-xl text-right mx-3">
                    يعقوب علية السلام
                    </p>
                </div>
                {/* عددالمرات */}
                <div className="bg-teal-400 rounded-md mx-2 md:w-[120px] h-[150px] text-center">
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
            <div className="border-b border-b-gray-300 mx-2"></div>
            {/*  */}
        </div>
    </section>
    </>
)
}

export default Azkari
