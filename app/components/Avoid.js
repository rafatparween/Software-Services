
export default function Avoid() {
  return (
    <div className="bg-[#dbe8f0] flex justify-between items-center px-6 py-8">
      {/* Left Image Section */}
      <div className="w-1/2">
        <img
          src="https://t3.ftcdn.net/jpg/01/29/04/10/360_F_129041088_2oiesPtf5kZF9y2thvHHzXvqiGhhmouf.jpg" // Use a placeholder image or the actual image path here
          alt="Pocket Empty"
          width={598} 
          height={479} 
          className="object-cover 2xl:ml-[268px] xl:ml-[88px] "
        />
      </div>

      {/* Right Text Section */}
      <div className="w-1/2 flex flex-col space-y-6">
        <h1 className="text-4xl font-bold">
          Avoiding Printer Maintenance <br />
          <span className="text-orange-500">Can Burn A Hole In Your Pocket!!</span>
        </h1>

        <h2 className="text-3xl text-blue-500 font-semibold">How?</h2>
        
        <p className="text-lg">
          If You Don't Take Good Care Of Your Printers And Copiers, They Might Break
          Down Sooner Than Expected. If You Don't Do Regular Maintenance, You Might
          Need To Replace Them Sooner. Spending A Little On Maintenance Is Way
          Cheaper Than Buying A New Printer.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-[30px] w-max">
          Get Assistance
        </button>
      </div>

      {/* Assistance Call Section (Vertical Text) */}
      {/* <div className="bg-blue-600 rotate-90 text-white p-3 text-center fixed right-0 top-1/4">
        Call for Assistance At +1 (866) 200-9902
      </div> */}
    </div>
  );
}
