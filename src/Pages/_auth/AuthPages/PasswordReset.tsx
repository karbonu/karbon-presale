import BackArrow from "@/components/Icons/BackArrow";
import PasswordLogo from "@/components/Icons/PasswordLogo";
import SucccessIconSmall from "@/components/Icons/SucccessIconSmall";
import { usePasswoedUpdateMutate, usePasswordOTPMutate } from "@/components/shared/Hooks/UseAuthMutation";
import PasswordIconComp from "@/components/shared/PasswordIconComp";
import { useState } from "react";
import { BarLoader } from "react-spinners";


const PasswordReset = (props : any) => {
    const [step, setStep] = useState(1);
    const [OTP, setOTP] = useState('');
    const [ verificationError, setverificationError] = useState('')
    const [isVerifying, setISVerifying] = useState(false);
  const [password, setPassword] = useState('');
  const [oldPassword, setoldPassword] = useState('');
  const passwordOtpMutate = usePasswordOTPMutate();
  const passwordUpdate = usePasswoedUpdateMutate();
  
  const [validation, setValidation] = useState({
    minLength: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (password : any) => {
    const minLength = password.length >= 10;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setValidation({
      minLength,
      upperCase,
      lowerCase,
      number,
      specialChar,
    });
  };

  const handlePasswordChange = (event : any) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (event : any) => {
    const newConfirmPassword = event.target.value;
    setoldPassword(newConfirmPassword);

  };

  const handleVerify = () =>{
    setISVerifying(true);

    if(oldPassword === password){
      setverificationError('New passowrd matches current password, Try Again'); 
    }
    
      let email = props.email;
      passwordOtpMutate.mutate(
          { email, 
            otp : OTP, 
            newPassword: password},
          {
              onSuccess: () => {
                passwordUpdate.mutate(
                  { email, 
                    oldPassword : oldPassword, 
                    newPassword: password },
                  {
                      onSuccess: () => {
                        setISVerifying(false);
                        setStep(3);
                      },
                      onError: (error) => {
                        console.log(error)
                        setISVerifying(false);

                        setverificationError('Password Change Failed, Try Again');
                      }
                  }
              );
                
              },
              onError: (error) => {
                console.log(error)
                setISVerifying(false);
                setverificationError('OTP Verification Failed, Try Again');
              }
          }
      );
  }
  
  const handleOTPKeydown = (event: any) => {
    if (event.key === 'Enter') {
      setStep(2)
    }
};

const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setOTP(event.target.value);
  setverificationError('');
};

  return (
    
    <div className="flex items-center  justify-center w-full flex-col">
      {step === 1 &&(
        <div className="flex flex-col w-full items-center justify-center pt-[4rem]">
          <div className="w-[450px] max-sm:w-[100%] bg-[#101010] border-[#2D2D2D] py-5 border-[1px] rounded-[8px]">
            <div className="px-8 flex space-y-5 flex-col justify-between h-full">
              <div className="flex flex-row space-x-2 items-center">
              <PasswordLogo />
                <p className="text-white text-[20px] max-sm:text-[16px] font-semibold">Reset Password</p>
              </div>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[14px] max-sm:text-[12px]">Enter OTP</p>
                  <input onChange={handleOTPChange} onKeyDown={handleOTPKeydown} className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[16px] rounded-[4px] h-[56px] px-4" type="text" />
                </div>
                <div>
                  <button onClick={() => setStep(2)} className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                    {isVerifying ? (
                      <BarLoader/>
                    ): (
                      <p className="font-bold text-[14px] max-sm:text-[12px] shadow-sm">Proceed</p>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col w-full items-center justify-center pt-[4rem]">
          <div className="w-[450px] max-sm:w-[100%] bg-[#101010] border-[#2D2D2D] border-[1px] rounded-[8px]">
            <div className="py-5 px-8 flex flex-col justify-between h-full">
              <div className="flex flex-row space-x-2 items-center pb-5">
                <PasswordLogo />
                <p className="text-white text-[20px] max-sm:text-[16px] font-semibold">Create a new password</p>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[14px] max-sm:text-[12px]">Old Password</p>
                  <input className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[12px] rounded-[4px] h-[56px] px-4" type="password" value={oldPassword} onChange={handleConfirmPasswordChange} />
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-white text-[14px] max-sm:text-[12px]">New Password</p>
                  <input className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[12px] rounded-[4px] h-[56px] px-4" type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center space-x-2">
                    <PasswordIconComp condition={validation.minLength} />
                    <p className={!validation.minLength ? 'text-[14px] max-sm:text-[12px] text-white opacity-55' : 'text-[14px] max-sm:text-[12px] text-[#08E04A]'}>Must contain at least 10 characters</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <PasswordIconComp condition={validation.upperCase} />
                    <p className={!validation.upperCase ? 'text-[14px] max-sm:text-[12px] text-white opacity-55' : 'text-[14px] max-sm:text-[12px] text-[#08E04A]'}>Upper case character</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <PasswordIconComp condition={validation.lowerCase} />
                    <p className={!validation.lowerCase ? 'text-[14px] max-sm:text-[12px] text-white opacity-55' : 'text-[14px] max-sm:text-[12px] text-[#08E04A]'}>Lower case character</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <PasswordIconComp condition={validation.number} />
                    <p className={!validation.number ? 'text-[14px] max-sm:text-[12px] text-white opacity-55' : 'text-[14px] max-sm:text-[12px] text-[#08E04A]'}>Number</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <PasswordIconComp condition={validation.specialChar} />
                    <p className={!validation.specialChar ? 'text-[14px] max-sm:text-[12px] text-white opacity-55' : 'text-[14px] max-sm:text-[12px] text-[#08E04A]'}>Special Character</p>
                  </div>
                </div>
                <div>
                  <div onClick={handleVerify} className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                  {isVerifying ? (
                      <BarLoader/>
                    ): (
                      <p className="font-bold text-[14px] max-sm:text-[12px] shadow-sm">Reset Password</p>
                    )}
                  </div>
                  {verificationError && (
                    <p className="text-[10px] w-full text-center text-red-500 mt-2">{verificationError}</p>
                  )}
                </div>

                <a onClick={() => setStep(1)} className="flex flex-row space-x-2 items-center justify-center cursor-pointer">
                    <div className="flex items-center justify-center">
                        <BackArrow />
                    </div>
                    <p className="text-white text-[14px]">Back</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    {step ===3 && (
        <div className="flex flex-col w-full items-center justify-center pt-[4rem]">
            <div className="w-[450px] py-5 max-sm:w-[100%] items-center justify-center bg-[#101010] border-[#2D2D2D] border-[1px] rounded-[8px]">
                <div className="py-5 px-8 flex flex-col space-y-5 justify-between h-full">
                    <div className="flex flex-row space-x-2 items-center justify-center">
                        <SucccessIconSmall/>
                    </div>
                    <p className="text-white font-bold text-center text-[20px]">Password Reset Successful</p>
                    <a href="/sign-in" className="flex flex-row space-x-2 items-center justify-center cursor-pointer">
                        <div className="flex items-center justify-center">
                            <BackArrow />
                        </div>
                        <p className="text-white text-[14px]">Back to Login</p>
                    </a>
                </div>
            </div>
        </div>  
        )}
    </div>


  )
}

export default PasswordReset