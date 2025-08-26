import { NavLink } from "react-router-dom"

const Hero = () => {
return (
    <>
    <section className="bg-gray-200 pt-20 pb-10">
        <div className="bg-gray-50 rounded-md text-center my-1 md:mx-3 w-[430px] md:w-[400px] lg:w-[800px] py-8 lg:mx-60">
            <div className="grid grid-cols-2 md:grid-cols-4 md:mx-10 gap-1 mx-5">
                {/* box 1 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-الصباح">
                <h1 className="text-gray-100 text-lg p-3">
                أذكار الصباح
                </h1>
                </NavLink>
                </div>
                {/* box 2 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">  
                <NavLink to="/أذكار-المساء">
                <h1 className="text-gray-100 text-lg p-3">
                أذكار المساء
                </h1>
                </NavLink>
                </div>
                {/* box 3 */}
                <div className=" bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-بعد-السلام-من-الصلاة-المفروضة ">
                <h1 className="text-gray-100 text-lg  p-3">
                أذكار بعد الصلاة
                </h1>
                </NavLink>
                </div>
                {/* box 4 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-النوم">
                <h1 className="text-gray-100 text-lg  p-3">
                أذكار النوم
                </h1>
                </NavLink>
                </div>
                {/* box 5 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-الإستيقاظ-من-النوم">
                <h1 className="text-gray-100 text-lg p-3">
                أذكار الإستيقاظ
                </h1>   
                </NavLink>
                </div>
                {/* box 6 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/تسابيح-تسبيح-السبحة-أذكار-عظيمة">
                <h1 className="text-gray-100 text-lg  p-3">
                تسابيح
                </h1>
                </NavLink>
                </div>
                {/* box 7 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-الطعام-والشراب-والضيف">
                <h1 className="text-gray-100 text-xl p-3">
                أذكار الطعام
                </h1>
                </NavLink>
                </div>
                {/* box 8 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-الوضوء">
                <h1 className="text-gray-100 text-xl p-3">
                أذكار الوضوء
                </h1>
                </NavLink>
                </div>
                {/* box 9 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/دعاء-ختم-القرآن-الكريم">
                <h1 className="text-gray-100 md:text-lg py-3">
                دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ
                </h1>
                </NavLink>
                </div>
                {/* box 10 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أدعية-للميت">
                <h1 className="text-gray-100 text-xl p-3">
                أدعية للميّت
                </h1>
                </NavLink>
                </div>
                {/* box 11 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/الرقية-الشرعية-من-القرآن-والسن">
                <h1 className="text-gray-100 text-lg p-3">
                الرُّقية الشرعية
                </h1>
                </NavLink>
                </div>
                {/* box 12 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-الحج-والعمرة">
                <h1 className="text-gray-100 text-lg p-3">
                    أذكار الحج والعمرة
                </h1>
                </NavLink>
                </div>
                {/* box 13 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أسماء-الله-الحسنى">
                <h1 className="text-gray-100 text-lg p-3">
                أسماء الله الحسنى
                </h1>
                </NavLink>
                </div>
                {/* box 14*/}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكار-الصلاة">
                <h1 className="text-gray-100 text-xl p-3">
                أذكار الصلاة
                </h1>
                </NavLink>
                </div>
                {/* box 15 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/فضل الدعاء">
                <h1 className="text-gray-100 text-xl p-3">
                فضل الدعاء
                </h1>
                </NavLink>
                </div>
                {/* box 16 */}
                <div className="bg-teal-400 rounded-md md:w-[170px] w-[160px] md:h-[55px] cursor-pointer mt-3 hover:bg-teal-500 transition duration-300 ease-in-out">
                <NavLink to="/أذكارالمسجد">
                <h1 className="text-gray-100 text-xl p-3">
                أذكار المسجد
                </h1>
                </NavLink>
                </div>
                {/* Lats*/}
            </div>
        </div>
    </section>
    </>
)
}

export default Hero
