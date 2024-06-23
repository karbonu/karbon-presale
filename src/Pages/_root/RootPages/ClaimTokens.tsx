import MetaTags from "@/components/shared/MetaTags"
import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Dot from "@/components/Icons/Dot";
import { ScrollArea } from "@/components/ui/scroll-area";
import NoTrasactionsLogo from "@/components/Icons/NoTrasactionsLogo";



const ClaimTokens = () => {

  const [loading, setIsLoading] = useState(true);

  const tableData = [
    {
      index: "1",
      karbonAmount: "5,462",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "2",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "3",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "4",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "5",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "6",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "7",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "7",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "7",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
    {
      index: "7",
      karbonAmount: "517",
      releaseMonth: "02 FEB",
      releaseTime: "19:23:00",
    },
  ]
    

  if (loading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000ms = 2s

    return (
      <div
        className={`items-center justify-center flex w-full min-h-[88vh] bg-black bg-opacity-20 ${
          loading ? "fade-in" : "fade-out"
        }`}
      >
        <ClimbingBoxLoader color="#08E04A" />
      </div>
    );
  }


  return (

    <div className="w-full h-full">
        <MetaTags
        title="Karbon Sale | Claim Token"
        />
        <div className="w-full h-full flex flex-col space-y-5 items-center justify-center">
          <div className="w-[1152px] bg-[#101010] rounded-[8px] h-[210px]">
            <div className="flex flex-col p-10 space-y-5">
              <div className="flex flex-row items-center justify-between w-full">

                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[12px] opacity-70">TOKENS BOUGHT</p>
                  <div className="flex flex-row space-x-1">
                    <p className="text-white text-[24px]">00.00345</p>
                    <p className="text-white text-[24px] opacity-50">KARBON</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[12px] opacity-70">A064NT SPENT</p>
                  <div className="flex flex-row space-x-1">
                    <p className="text-white text-[24px]">21,325</p>
                    <p className="text-white text-[14px]">.45</p>
                    <p className="text-white text-[24px] opacity-50">USDT</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[12px] opacity-70">TOKEN VALUE</p>
                  <div className="flex flex-row space-x-1">
                    <p className="text-white text-[24px]">21,325</p>
                    <p className="text-white text-[14px]">.45</p>
                    <p className="text-white text-[24px] opacity-50">USDT</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[12px] opacity-70">ESTIMATED CLAIM TIME</p>
                  <p className="text-white text-[24px]">1d 22h 45m 34s</p>
                </div>

              </div>

              <div>
              <div className="flex items-center justify-center bg-[#08E04A] w-[269px] h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                  <p className="font-bold text-[14px] shadow-sm">
                      Claim Tokens
                  </p>
              </div>
              </div>

            </div>

          </div>

          <div className="w-[1152px] bg-[#101010] rounded-[8px] h-[490px]">
            <div className="flex w-full flex-col px-2 py-5 space-y-5">
              <p className="text-white px-8 text-[20px] font-semibold">Vesting Schedule</p>
              <div className="w-full">
                <table className="w-full p">
                  <thead className="bg-black h-[32px] hover:bg-black border-b-[#151515]">
                    <tr className="border-b-[#151515] flex items-center justify-between w-full py-3 px-5">
                      <th className="text-white opacity-50 font-normal text-[12px]">VESTING PERIOD</th>
                      <th className="text-white opacity-50 font-normal text-[12px] ">TOKENS RELEASED</th>
                      <th className="text-white opacity-50 font-normal pr-5 text-[12px]">ESTIMATED RELEASE DATE</th>
                    </tr>
                  </thead>
                  <ScrollArea className="w-[100%] h-[22.5rem]">
                    <tbody>
                      {tableData === null ? (
                        <div className="bg-black flex min-h-[42vh] items-center justify-center flex-col space-y-5">
                          <NoTrasactionsLogo/>
                          <div className="flex flex-col space-y-1 items-center justify-center">
                            <p  className="text-white opacity-70 text-[12px]">No Transactions Yet</p>
                            <p  className="text-white opacity-50 text-[12px]">Buy Tokens to get started</p>
                          </div>

                        </div>
                      ): (
                        <>
                          {tableData.map((data) => (
                          <tr className="hover:bg-black border-b-[1px] h-[47px] pl-5 pr-14 w-full flex flex-row items-center justify-between border-b-[#151515] hover:bg-opacity-40 bg-black bg-opacity-40" key={data.index}>
                            <td className="font-bold text-white text-start">{data.index}</td>

                            <td className=" text-white pl-[6rem]">{data.karbonAmount} <span className=" opacity-50">KARBON</span></td>
                            <td className="flex flex-row items-center space-x-2">
                              <p className=" text-white opacity-50">{data.releaseMonth} </p>
                              <Dot/>
                              <p className=" text-white opacity-50">{data.releaseTime} </p>
                            </td>
                          </tr>
                        ))}
                        </>
                      )}
                    </tbody>
                  </ScrollArea>
                </table>

              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ClaimTokens