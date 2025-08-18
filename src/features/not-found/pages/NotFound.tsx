import { memo } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black text-center relative px-4">
            <h1 className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[220px] md:text-[300px] font-extrabold text-[#1D1D1D]/70 select-none leading-none">
                404
            </h1>
            <div className="z-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
                    Упс... страница не найдена!
                </h2>
                <p className="text-[#a1a1a1] mt-4 max-w-[550px] mx-auto text-sm md:text-lg leading-relaxed">
                    Возможно, страница была удалена, её адрес изменился или она временно недоступна.
                </p>

                <div className="flex items-center justify-between gap-[5px]">
                    <button
                        onClick={() => navigate("/")}
                        className="mt-8 px-8 py-3 rounded-[12px] bg-[#C61F1F] hover:bg-[#a81818] transition-colors text-white font-semibold text-[16px] shadow-lg"
                    >
                        Вернуться на главную
                    </button>
                    <p className="mt-[24px] text-[22px] text-[#a1a1a1]">или</p>
                    <button onClick={() => navigate(-1)} className="mt-8 px-8 py-3 rounded-[12px] bg-[#C61F1F] hover:bg-[#a81818] transition-colors text-white font-semibold text-[16px] shadow-lg">Вернуться назад</button>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="w-[400px] h-[300px] z-0 bg-[#c61f1f]/30 rounded-full blur-[160px] absolute -top-20 -left-20" />
                <div className="w-[150px] h-[450px] z-0 bg-[#C61F1F]/60 rounded-full blur-[140px] absolute bottom-0 right-0" />
            </div>
        </div>
    );
};

export default memo(NotFound);
