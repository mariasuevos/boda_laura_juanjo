
const Divider = () => {
    return (
        <div className="flex items-center justify-center py-8 bg-[#f0ebe0] w-full">
            {/* Decorative Divider */}
            <div className="h-px w-24 bg-stone-400 opacity-40"></div>
            <div className="mx-4 text-[#bfa15f]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L24 12L12 24L0 12L12 0Z" />
                </svg>
            </div>
            <div className="h-px w-24 bg-stone-400 opacity-40"></div>
        </div >
    );
};

export default Divider;