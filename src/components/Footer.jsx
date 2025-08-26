import { FaFacebookF, FaInstagram, FaTwitter, FaShareAlt, FaUnlockAlt } from "react-icons/fa";

const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("تم نسخ رابط الموقع! يمكنك الآن مشاركته مع الآخرين.");
};

const Footer = () => {
    return (
        <section className="mt-10 bg-teal-600">
            <footer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 text-white">
                {/* Social Media */}
                <div className="flex flex-col items-center">
                    <h2 className="font-bold mb-4 text-lg">تابعنا</h2>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="w-7 h-7 hover:text-gray-200 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-7 h-7 hover:text-gray-200 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-7 h-7 hover:text-gray-200 transition" />
                        </a>
                    </div>
                    <span className="text-sm">تابعنا على وسائل التواصل</span>
                </div>
                {/* About/Contact/Terms */}
                <div className="flex flex-col items-center">
                    <h2 className="font-bold mb-4 text-lg">روابط مهمة</h2>
                    <a href="#" className="mb-2 hover:text-gray-200 transition">من نحن</a>
                    <a href="#" className="mb-2 hover:text-gray-200 transition">عن الموقع</a>
                    <a href="#" className="mb-2 hover:text-gray-200 transition">اتصل بنا</a>
                </div>
                {/* Terms/Share */}
                <div className="flex flex-col items-center">
                    <h2 className="font-bold mb-4 text-lg">المزيد</h2>
                    <a href="#" className="mb-2 flex items-center hover:text-gray-200 transition">
                        <FaUnlockAlt className="w-5 h-5 ml-2" />
                        شروط الاستخدام
                    </a>
                    <button
                        onClick={handleShare}
                        className="mb-2 flex items-center bg-teal-700 px-3 py-1 rounded hover:bg-teal-800 transition"
                    >
                        <FaShareAlt className="w-5 h-5 ml-2" />
                        شارك مع الآخرين
                    </button>
                </div>
                {/* Copyright */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold mb-4 text-lg">حقوق النشر</h2>
                    <span className="text-center text-sm">
                        © {new Date().getFullYear()} أذكار المسلم<br />
                        جميع الحقوق محفوظة.
                    </span>
                </div>
            </footer>
        </section>
    );
};

export default Footer;