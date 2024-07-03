import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"
import DialogClose from "../Icons/DialogClose"
import FailedModalIcon from "../Icons/FailedModalIcon"


const BoughtTokensFailed = (props : any) => {
  return (
    <div>
        <Dialog open={props.isDialogOpen} onOpenChange={props.setIsDialogOpen}>
            <DialogContent className='bg-[#101010] border-[1px] border-[#282828] pt-10 px-10 pb-5 flex flex-col w-[316px] max-sm:w-[300px] items-center justify-center rounded-[16px] outline-none'>
                <div className='w-full flex flex-row items-end justify-end'>
                    <div onClick={() => props.setIsDialogOpen(false)} className='cursor-pointer '>
                        <DialogClose/>
                    </div>
                </div>      

                <div className="w-full py-5 flex flex-col space-y-5 items-center justify-center">
                    <FailedModalIcon/>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <p className=" text-[#FF3636] font-medium text-[32px]">Failed</p>
                    </div>
                    <p className="text-center text-white w-[251px] text-[14px] leading-6 tracking-normal">We were not able to complete your contribution. You can <span onClick={() => props.setIsDialogOpen(false)}  className="text-[#08E04A] cursor-pointer">try again.</span> was successful..</p>

                    <div onClick={() => props.setIsDialogOpen(false)} className="bg-transparent py-2 px-10 cursor-pointer hover:border-[#08E04A] transition ease-in-out text-white text-[14px] hover:text-[#08E04A] rounded-full border-[1px] border-white">
                        Close
                    </div>
                </div>
            </DialogContent>
          </Dialog>
    </div>
  )
}

export default BoughtTokensFailed