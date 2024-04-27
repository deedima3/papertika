import NormalButtonBG from "../SVGWrapper/NormalButtonBG";

type NormalButtonProps = {
  text: string;
  type: "button" | "submit";
  onClick: () => void;
};

const SmallNormalButton = ({ text, type, onClick }: NormalButtonProps) => {
  return (
    <button
      className="text-white relative text-xl font-bold w-max active:scale-95 transition-all ease-in-out"
      type={type}
      onClick={onClick}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full my-6 text-center flex justify-center stroke-[#412416]  font-outline-2 fix-stroke">
        {text}
      </div>
      <div className="">
        <NormalButtonBG />
      </div>
    </button>
  );
};

export default SmallNormalButton;
