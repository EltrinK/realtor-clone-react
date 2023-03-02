import spinner from "@assets/spinner.svg";

export const Spinner = () => {
  return (
    <div className="bg-black opacity-50 flex justify-center items-center h-screen z-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};
