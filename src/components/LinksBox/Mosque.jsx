

const Mosque = () => {
return (
    <>
    <section className="my-10 text-center">
        <div className="border border-sky-500 rounded-md mx-10">
            {/* head */}
            <div className="bg-sky-400 text-center rounded-md">
                <h1 className='text-gray-50 text-lg md:text-2xl font-bold py-3'>
                    أذكار المسجد
                </h1>
            </div>
            {/* main */}
                <div className="flex flex-col gap-6 w-full px-6 py-6">
                    {/* Item 1 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center px-3 py-4">
                    <h1 className="py-2 text-orange-500  md:text-xl font-bold text-right tracking-wide">
                دُعَاءُ الذَّهَابِ إلَى المَسْجِدِ
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                    اللّهُـمَّ اجْعَـلْ في قَلْبـي نورا ، وَفي لِسـاني نورا، وَاجْعَـلْ في سَمْعي نورا، وَاجْعَـلْ في بَصَري نورا، وَاجْعَـلْ مِنْ خَلْفي نورا، وَمِنْ أَمامـي نورا، وَاجْعَـلْ مِنْ فَوْقـي نورا ، وَمِن تَحْتـي نورا .اللّهُـمَّ أَعْطِنـي نورا.  
                    </p>
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
                    {/* Item 2 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center px-3 py-4">
                    <h1 className="py-2 text-orange-500  md:text-xl font-bold text-right tracking-wide">
                        دُعَاءُ دُخُولِ المَسْجِدِ
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                        يَبْدَأُ بِرِجْلِهِ اليُمْنَى، وَيَقُولُ:
                    أَعوذُ باللهِ العَظيـم وَبِوَجْهِـهِ الكَرِيـم وَسُلْطـانِه القَديـم مِنَ الشّيْـطانِ الرَّجـيم، بِسْمِ اللَّهِ، وَالصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ الله، اللّهُـمَّ افْتَـحْ لي أَبْوابَ رَحْمَتـِك. 
                    </p> 
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
                    {/* Item 3 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center px-3 py-4">
                    <h1 className="py-2 text-orange-500  md:text-xl font-bold text-right tracking-wide">
                    دُعَاءُ الخُرُوجِ مِنَ المَسْجِدِ
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                        يَبْدَأُ بِرِجْلِهِ الْيُسْرَى، وَيَقُولُ:
                بِسْـمِ اللَّـهِ وَالصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيم.  
                    </p> 
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
    {/*  */}
            </div>
        </div>
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
            حَدَّثَنَا هَنَّادٌ حَدَّثَنَا يَحْيَى بْنُ مَعِينٍ حَدَّثَنَا هِشَامُ بْنُ يُوسُفَ حَدَّثَنِي عَبْدُ اللَّهِ بْنُ بَحِيرٍ أَنَّهُ سَمِعَ هَانِئًا مَوْلَى عُثْمَانَ قَالَ كَانَ عُثْمَانُ إِذَا وَقَفَ عَلَى قَبْرٍ بَكَى حَتَّى يَبُلَّ لِحْيَتَهُ فَقِيلَ لَهُ تُذْكَرُ الْجَنَّةُ وَالنَّارُ فَلَا تَبْكِي وَتَبْكِي مِنْ هَذَا فَقَالَ إِنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ إِنَّ الْقَبْرَ أَوَّلُ مَنْزِلٍ مِنْ مَنَازِلِ الْآخِرَةِ فَإِنْ نَجَا مِنْهُ فَمَا بَعْدَهُ أَيْسَرُ مِنْهُ وَإِنْ لَمْ يَنْجُ مِنْهُ فَمَا بَعْدَهُ أَشَدُّ مِنْهُ قَالَ وَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَا رَأَيْتُ مَنْظَرًا قَطُّ إِلَّا الْقَبْرُ أَفْظَعُ مِنْهُ قَالَ هَذَا حَدِيثٌ حَسَنٌ غَرِيبٌ لَا نَعْرِفُهُ إِلَّا مِنْ حَدِيثِ هِشَامِ بْنِ يُوسُفَ.
                </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
                <p className="text-gray-500 md:text-2xl text-lg text-right p-4 border border-gray-300">
            حَدَّثَنَا أَحْمَدُ بْنُ عَبْدِ اللَّهِ بْنِ يُونُسَ حَدَّثَنَا زُهَيْرٌ حَدَّثَنَا أَبُو الزُّبَيْرِ عَنْ جَابِرٍ قَالَ قَالَتْ امْرَأَةُ بَشِيرٍ انْحَلْ ابْنِي غُلَامَكَ وَأَشْهِدْ لِي رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَأَتَى رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ إِنَّ ابْنَةَ فُلَانٍ سَأَلَتْنِي أَنْ أَنْحَلَ ابْنَهَا غُلَامِي وَقَالَتْ أَشْهِدْ لِي رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ أَلَهُ إِخْوَةٌ قَالَ نَعَمْ قَالَ أَفَكُلَّهُمْ أَعْطَيْتَ مِثْلَ مَا أَعْطَيْتَهُ قَالَ لَا قَالَ فَلَيْسَ يَصْلُحُ هَذَا وَإِنِّي لَا أَشْهَدُ إِلَّا عَلَى حَقٍّ.
                    </p>
                <div className="border-b border-b-gray-300 mx-2 my-5"></div>
            </div>
        </article>
    </section>
    </>
)
}

export default Mosque
