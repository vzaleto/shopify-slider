interface ColorSelectorProps {
    selectedColor: string,
    availableColors: string[],
    onChange: (color: string) => void;
}

export const ColorSelector = ({selectedColor, availableColors, onChange}: ColorSelectorProps) => {

    return (
        <div className="flex gap-4 flex-wrap my-4 lg:mb-4 lg:my-0">
            {availableColors.map((color) => (
                <button key={color}
                        className={`px-4 py-2 border rounded-full cursor-pointer  xl:text-base md:text-sm sm:text-xs text-xs ${color === selectedColor ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={() => onChange(color)}>
                    {color}
                </button>
            ))}
        </div>
    );
};