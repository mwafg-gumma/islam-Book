import React from 'react'

const Food = () => {
return (
    <>
    <section className="my-10 text-center">
        <div className="border border-sky-500 rounded-md mx-10">
            {/* head */}
            <div className="bg-sky-400 text-center rounded-md">
                <h1 className='text-gray-50 text-lg md:text-2xl font-bold py-3'>
                أذكار الطعام والشراب والضيف
            </h1>
            </div>
            {/* main */}
                <div className="flex flex-col gap-3 w-full md:px-6 px-2 py-6">
                    {/* Item 1 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center md:px-3 py-4">
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide">
                        الذكر عند الطعام والشراب
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                    بِسْمِ اللهِ. <br />
                    فإنْ نسي في أَوَّلِهِ، فَليَقُلْ: <br />
                    بِسْمِ اللَّه أَوَّلَهُ وَآخِرَهُ.  
                    </p>
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
                {/* items3 */}
                    {/* Item 2 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center md:px-3 py-4">
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide">
                        الذكر عند شرب اللبن
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                    اَللَّهُمَّ بَارِكْ لَنَا فِيهِ, وَزِدْنَا مِنْهُ. 
                    </p>
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
                    {/* Item 4 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center md:px-3 py-4">
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide">
                        الذكر عند الفراغ من الطعام والشراب
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                    الْحَمْدُ للهِ الَّذِي أَطْعَمَنِي هَذَا, وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِّنِّي وَلاَ قُوَّةٍ.
                    الْحَمْدُ لِلَّهِ كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا  
                    </p>
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
                    {/* Item 5 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center px-3 py-4">
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide">
                        أذكار الضيف
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                        أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ ، وَأَكَلَ طَعَامَكُمُ الأَبْرَارُ ، وَصَلَّتْ عَلَيْكُمُ الْمَلائِكَةُ  
                    </p>
                </div>
                {/* Number box on left */}
                <div className="flex items-center justify-center rounded-md bg-teal-600 md:w-[120px] w-[50px] md:h-[130px] h-[50px] m-2">
                    <p className="font-bold text-gray-100 md:text-3xl text-lg text-center">
                        1
                    </p>
                </div>
            </div>
                    {/* Item 6 */}
                <div className="flex flex-row items-stretch bg-white rounded-md shadow">
                {/* Text section on right */}
                <div className="flex-1 flex flex-col justify-center px-3 py-4">
                    <h1 className="py-2 text-amber-500  md:text-xl font-bold text-right tracking-wide">
                        هدى النبى فى الشرب
                    </h1>
                    <p className="md:text-xl text-gray-500 text-right">
                كَانَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَشْرَبُ فِي ثَلاَثَةِ أَنْفَاسٍ، إِذَا أَدْنَى الإِنَاءَ إِلَى فَمِهِ سَمَّى اللهَ تَعَالَى, وَإِذَا أَخَّرَهُ حَمِدَ اللهَ تَعَالَى، يَفْعَلُ ذَلِكَ ثَلاَثَ مَرَّاتٍ.   
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
            <div className=" mx-4 my-4 border border-gray-200  p-5">
                <p className=" text-gray-500 md:text-2xl text-lg text-right p-2">
            حَدَّثَنَا حَرْمَلَةُ بْنُ يَحْيَى وَأَحْمَدُ بْنُ عِيسَى الْمِصْرِيَّانِ قَالَا حَدَّثَنَا عَبْدُ اللَّهِ بْنُ وَهْبٍ حَدَّثَنِي أَبُو شُرَيْحٍ عَبْدُ الرَّحْمَنِ بْنُ شُرَيْحٍ أَنَّ سَهْلَ بْنَ أَبِي أُمَامَةَ بْنِ سَهْلِ بْنِ حُنَيْفٍ حَدَّثَهُ عَنْ أَبِيهِ عَنْ جَدِّهِ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ مَنْ سَأَلَ اللَّهَ الشَّهَادَةَ بِصِدْقٍ مِنْ قَلْبِهِ بَلَّغَهُ اللَّهُ مَنَازِلَ الشُّهَدَاءِ وَإِنْ مَاتَ عَلَى فِرَاشِهِ.
                </p>
            </div>
            <div className=" mx-4 my-4 border border-gray-200  p-5">
                <p className=" text-gray-500 md:text-2xl text-lg text-right p-2">
            أَخْبَرَنَا مُحَمَّدُ بْنُ الْوَلِيدِ قَالَ حَدَّثَنَا مُحَمَّدٌ قَالَ حَدَّثَنَا شُعْبَةُ عَنْ أَبِي بَكْرِ بْنِ حَفْصٍ عَنْ عَبْدِ اللَّهِ بْنِ حُنَيْنٍ عَنْ ابْنِ عَبَّاسٍ قَالَ نُهِيتُ عَنْ الثَّوْبِ الْأَحْمَرِ وَخَاتَمِ الذَّهَبِ وَأَنْ أَقْرَأَ وَأَنَا رَاكِعٌ.
                </p>
            </div>
            <div className=" mx-4 my-4 border border-gray-200  p-5">
                <p className=" text-gray-500 md:text-2xl text-lg text-right p-2">
        حَدَّثَنَا عَتَّابٌ حَدَّثَنَا عَبْدُ اللَّهِ أَخْبَرَنَا ابْنُ لَهِيعَةَ حَدَّثَنِي يَزِيدُ بْنُ أَبِي حَبِيبٍ عَنْ يَزِيدَ بْنِ أَبِي سَعِيدٍ مَوْلَى الْمَهْرِيِّ عَنْ أَبِيهِ عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بَعَثَ بَعْثًا إِلَى بَنِي لِحْيَانَ قَالَ يَعْنِي لِيَنْبَعِثْ مِنْ كُلِّ رَجُلَيْنِ رَجُلٌ وَقَالَ لِلْقَاعِدِ أَيُّكُمَا خَلَفَ الْخَارِجَ فِي أَهْلِهِ وَمَالِهِ بِخَيْرٍ كَانَ لَهُ مِثْلُ نِصْفِ أَجْرِ الْخَارِجِ.
                </p>
            </div>
        </article>
    </section>
    </>
)
}

export default Food
