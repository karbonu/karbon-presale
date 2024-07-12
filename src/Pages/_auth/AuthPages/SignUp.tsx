import AppleLogo from "@/components/Icons/AppleLogo.tsx";
import CloseIcon from "@/components/Icons/CloseIcon.tsx";
import GoogleLogo from "@/components/Icons/GoogleLogo.tsx";
import KarbonLogo from "@/components/Icons/KarbonLogo.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useState } from "react";

import VerifyEmailIcon from "@/components/Icons/VerifyEmailIcon.tsx";
import PasswordLogo from "@/components/Icons/PasswordLogo.tsx";
import BackArrow from "@/components/Icons/BackArrow.tsx";
import PasswordIconComp from "@/components/shared/PasswordIconComp.tsx";
import { useRegisterMutation } from "@/components/shared/Hooks/UseRegisterMutation.tsx";
import { BarLoader } from "react-spinners";

import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useInitialNonceMutation, useLoginMutation, useSocialAuthMutation, useVerifyEmailMutation } from "@/components/shared/Hooks/UseAuthMutation.tsx";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/components/shared/Contexts/AuthContext.tsx";
import EyeIcongreen from "@/components/Icons/EyeIcongreen.tsx";
import EyeIcon from "@/components/Icons/EyeIcon.tsx";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const { toast } = useToast();
  const [chanceInfo, setChanceInfo] = useState(true);
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [revealConfirmError, setRevealConfirmError] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [otp, setOtp] = useState("");
  const { setUserID,
    setReferralCOde,
    setEmail: setAuthEmail,
    isAuthenticated,
    setPassword: setAuthPassword,
    setAuthenticated,
    referralCode,
    setAccessTToken,
    setIsGoogleSignIn,
    setLastSignInTime
  } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const navigate = useNavigate();
  const [validation, setValidation] = useState({
    minLength: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
  });
  const registerMutation = useRegisterMutation();
  const verifyMutat = useVerifyEmailMutation();
  const initialNonceMutation = useInitialNonceMutation();
  const loginMutation = useLoginMutation();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isVerifying, setISVerifying] = useState(false);
  const [verificationError, setverificationError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const validatePassword = (password: string) => {
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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setRegistrationError('');
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = event.target.value;
    setRegistrationError('');
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setRevealConfirmError(true);
    } else {
      setRevealConfirmError(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setRegistrationError('');
  };

  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp((event.target.value));
    setverificationError('');
  };



  const handleRegister = () => {
    if (password === "") {
      toast({
        title: "Invalid Password!",
        description: "Please, Enter a valis password",
      })
      return;
    } else {
      if (confirmPassword === "") {
        toast({
          title: "Invalid Confirm Password!",
          description: "Please, Enter a valis confirm password",
        })
        return;
      }
    }


    if (password !== confirmPassword) {
      setRevealConfirmError(true);
      return;
    }
    setIsRegistering(true);

    registerMutation.mutate(
      {
        email,
        walletAddress: "",
        referrerId: referralCode as string,
        password,
      },
      {
        onSuccess: () => {
          setIsRegistering(false);
          toast({
            variant: "success",
            title: "Success!",
            description: "Registration Successfull",
          })
          setStep(3);
        },
        onError: (error) => {
          console.log(error);
          toast({
            variant: "failure",
            title: "Error!",
            description: "Registration Failed, Try Again",
          })
          setIsRegistering(false);
        },
      }
    );
  };

  const handleVerify = () => {

    if (otp == "") {
      toast({
        variant: "failure",
        title: "Enter a valid OTP!",
        description: "The One Time Password you entered is not valid",
      })
      return;
    }
    setISVerifying(true);
    let nonce = '';
    verifyMutat.mutate(
      {
        email,
        otp: Number(otp),
      },
      {
        onSuccess: () => {


          initialNonceMutation.mutate(
            { email },
            {
              onSuccess: (response: any) => {
                nonce = response.data.nonce;


                loginMutation.mutate(
                  { email, password, nonce },
                  {
                    onSuccess: (response: any) => {
                      if (response.data.user.is_verified === false) {
                        setStep(5)
                        return;
                      }
                      console.log(response.data)
                      setAccessTToken(response.data.access_token);
                      setUserID(response.data.user.id);
                      setReferralCOde(response.data.user.referralCode);
                      setLastSignInTime(Date.now());
                      setAuthEmail(email);
                      setAuthPassword(password);
                      setAuthenticated(true);
                      toast({
                        variant: "success",
                        title: "Success!",
                        description: "Login Successfull",
                      })
                      navigate('/dashboard');
                      setIsLoggingIn(false);
                      setISVerifying(false);
                    },
                    onError: () => {
                      toast({
                        variant: "failure",
                        title: "Error!",
                        description: "Invalid Login Credentials",
                      })
                      setISVerifying(false);
                      setIsLoggingIn(false);
                    }
                  }
                );

              },
              onError: () => {
                toast({
                  variant: "failure",
                  title: "Error!",
                  description: "Account with entered email does not exist",
                })
              }
            }
          );



        },
        onError: () => {
          toast({
            variant: "failure",
            title: "Error!",
            description: "Invalid or Expired OTP",
          })
          setISVerifying(false);
        }
      }
    );
  };



  const handleemailKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (email === "") {
        toast({
          variant: "failure",
          title: "Invalid Email!",
          description: "Please, Enter a valis email",
        })
      } else {
        setStep(2)
      }
    }
  };



  const handleVerificationKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleVerify();
    }
  };



  const socialSignIn = useSocialAuthMutation();

  const login = useGoogleLogin({
    onSuccess: async (res) => {
      setRegistrationError('');
      const token = res.access_token;
      setIsRegistering(true);
      setIsLoggingIn(true);
      try {
        const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { email, sub: userID } = userInfo.data;
        setIsRegistering(true);
        socialSignIn.mutate(
          {
            token: token,
            unique_id: userID,
            email: email,
            phone: "",
            medium: 'google',
            id_token: userID,
            ref_code: referralCode
          },

          {
            onSuccess: (response) => {
              localStorage.removeItem('referralCode');
              setAccessTToken(response.data.access_token);
              setUserID(response.data.user.id);
              setReferralCOde(response.data.user.referralCode);
              setAuthEmail(response.data.user.email);
              setLastSignInTime(Date.now());
              setIsGoogleSignIn(true)
              setAuthPassword('');
              setAuthenticated(true);
              navigate('/dashboard');
              setIsLoggingIn(false);
              toast({
                variant: "success",
                title: "Success!",
                description: "Login Successfull",
              })
            },
            onError: () => {
              toast({
                variant: "failure",
                title: "Error!",
                description: "Invalid Login Credentials",
              })
              setIsLoggingIn(false);
            }
          }
        );



      } catch (error) {
        toast({
          variant: "failure",
          title: "Error!",
          description: "Login Failed, Try Again",
        })
        setIsLoggingIn(false);
        setIsRegistering(false);
      }
    },
    onError: () => {
      toast({
        variant: "failure",
        title: "Error!",
        description: "Login Failed, Try Again",
      })
    },
  });

  const handleStepOne = () => {
    if (email === "") {
      toast({
        title: "Invalid Email!",
        description: "Please, Enter a valis email",
      })
    } else {
      setStep(2)
    }
  }

  return (
    <div className="p-[60px] max-sm:p-5 max-sm:pt-10">
      <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
        <KarbonLogo />
      </div>

      <div className="flex items-center justify-center w-full flex-col">
        {chanceInfo && (
          <div className="flex absolute top-20 max-sm:top-18 max-sm:w-[80%] flex-row space-x-3 items-center justify-between pl-5 rounded-[8px] border-[1px] border-[#282828] w-[421px] h-[52px] bg-black">
            <div onClick={() => setChanceInfo(false)}>
              <CloseIcon />
            </div>
            <div>
              <p className="text-white text-[10px]">A chance to buy Karbon tokens at half of the launch price.</p>
            </div>
            <div>
              <img src="./assets/halfPriceNotification.svg" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col items-center justify-center pt-[6rem]">
            <div className="w-[437px] max-sm:w-[100%] h-[495px] bg-[#101010] border-[#2D2D2D] border-[1px] rounded-[8px]">
              <div className="py-5 flex flex-col justify-between h-full">
                <p className="text-white px-8 text-[20px] max-sm:text-[16px] font-semibold">Create an account</p>

                <div className="flex flex-col px-5 items-center justify-center space-y-2">
                  <div onClick={() => login()} className="flex cursor-pointer flex-row w-[389px] max-sm:w-[100%] h-[56px] bg-[#1C1C1C]">
                    <div className="px-5 absolute py-3 flex items-center">
                      <GoogleLogo />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-white text-[14px] max-sm:text-[12px]">Sign up with Google</p>
                    </div>
                  </div>

                  <div className="flex flex-row w-[389px] max-sm:w-[100%] h-[56px] bg-[#1C1C1C]">
                    <div className="px-7 absolute py-5 flex items-center">
                      <AppleLogo />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-white text-[14px] max-sm:text-[12px]">Sign up with Apple ID</p>
                    </div>
                  </div>
                </div>

                <div className="flex px-8 flex-row space-x-4 w-full items-center justify-center max-sm:justify-between">
                  <Separator orientation="horizontal" className="max-w-[27%] max-sm:max-w-[20%]" />
                  <p className="text-white text-[14px] max-sm:text-[12px]">or sign up with email</p>
                  <Separator orientation="horizontal" className="max-w-[27%] max-sm:max-w-[20%]" />
                </div>

                <div className="flex px-8 flex-col space-y-5">
                  <input onKeyDown={handleemailKeyDown} className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[16px] rounded-[4px] h-[56px] px-4" type="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} />
                  <div className="  items-center opacity-70 text-white font-normal font-inter text-[12px]">
                    By creating an account, I agree to Karbon's <a href='https://karbon-website.vercel.app/terms-of-use' target='blank' className="underline underline-offset-2">Terms of Service</a> and <a href='https://karbon-website.vercel.app/privacy-policy' target='blank' className="underline underline-offset-2">Privacy Policy</a>
                  </div>
                  <div>
                    <button disabled={isLoggingIn} onClick={handleStepOne} className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                      {isLoggingIn ? (
                        <BarLoader />
                      ) : (
                        <p className="font-bold text-[14px] max-sm:text-[12px] shadow-sm">Proceed</p>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-row space-x-2 items-center justify-center">
                  <p className="text-white text-[14px] max-sm:text-[12px]">Already have an account?</p>
                  <a href="/sign-in" className="text-[14px] max-sm:text-[12px] text-[#08E04A] font-semibold">Sign In</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col w-full items-center justify-center pt-[7rem]">
            <div className="w-[450px] max-sm:w-[100%] h-[366px] bg-[#101010] border-[#2D2D2D] py-5 border-[1px] rounded-[8px]">
              <div className="px-8 flex flex-col justify-between h-full">
                <div className="flex flex-row space-x-2 items-center">
                  <VerifyEmailIcon />
                  <p className="text-white text-[20px] max-sm:text-[16px] font-semibold">Verify Email</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-white text-[14px] max-sm:text-[12px] opacity-70">A four-digit verification code was sent to</p>
                  <p className="text-white text-[14px] max-sm:text-[12px]">{email}</p>
                  <div className="flex flex-row space-x-2">
                    <p className="text-white opacity-70 text-[14px] max-sm:text-[12px]">Not your email?</p>
                    <p onClick={() => setStep(1)} className="text-[14px] max-sm:text-[12px] text-[#08E04A] font-semibold cursor-pointer">change email</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col space-y-2">
                    <p className="text-white text-[14px] max-sm:text-[12px]">Enter Verification Code</p>
                    <input onChange={handleOTPChange} onKeyDown={handleVerificationKeyDown} className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[16px] rounded-[4px] h-[56px] px-4" type="text" />
                  </div>
                  {verificationError && (
                    <p className="text-[10px] w-full text-center text-red-500 mt-2">{verificationError}</p>
                  )}

                  <div>
                    <button disabled={isVerifying} onClick={() => handleVerify()} className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                      {isVerifying ? (
                        <BarLoader />
                      ) : (
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
          <div className="flex flex-col w-full items-center justify-center pt-[5rem]">
            <div className="w-[450px] max-sm:w-[100%] bg-[#101010] border-[#2D2D2D] border-[1px] rounded-[8px]">
              <div className="py-5 px-8 flex flex-col justify-between h-full">
                <div className="flex flex-row space-x-2 items-center pb-5">
                  <PasswordLogo />
                  <p className="text-white text-[20px] max-sm:text-[16px] font-semibold">Create a password</p>
                </div>
                <div className="flex flex-row space-x-1 items-center">
                  <p className="text-white opacity-80 text-[14px] max-sm:text-[12px]">Welcome</p>
                  <p className="text-white text-[14px] max-sm:text-[12px]">{email}</p>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col space-y-2">
                    <p className="text-white text-[14px] max-sm:text-[12px]">Password</p>
                    <div className="flex flex-col space-y-2 relative">
                      <p className="text-white text-[14px] max-sm:text-[12px]">Password</p>
                      <input
                        className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[16px] rounded-[4px] h-[56px] px-4"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <div
                        className="absolute right-4 top-10 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeIcongreen />
                        ) : (
                          <EyeIcon />
                        )}
                      </div>
                    </div>
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


                  <div className="flex flex-col space-y-2 relative">
                    <p className="text-white text-[14px] max-sm:text-[12px]">Confirm Password</p>
                    <input
                      className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[16px] rounded-[4px] h-[56px] px-4"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <div
                      className="absolute right-4 top-10 cursor-pointer"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeIcongreen />
                      ) : (
                        <EyeIcon />
                      )}
                    </div>
                    {revealConfirmError && (
                      <p className="text-[10px] text-red-500">Password does not match</p>
                    )}
                  </div>
                  <div>
                    <button disabled={isRegistering} onClick={handleRegister} className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                      {isRegistering ? (
                        <BarLoader />
                      ) : (
                        <p className="font-bold text-[14px] max-sm:text-[12px] shadow-sm">Proceed</p>
                      )}
                    </button>
                  </div>

                  {registrationError && (
                    <p className="text-[10px] w-full text-center text-red-500 mt-2">{registrationError}</p>
                  )}

                  <div onClick={() => setStep(1)} className="flex flex-row w-full space-x-2 items-center justify-center cursor-pointer">
                    <div className="flex items-center justify-center">
                      <BackArrow />
                    </div>
                    <p className="text-white text-[14px] max-sm:text-[12px]">Back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="lg:absolute lg:bottom-5 flex items-center justify-center pt-10 lg:left-[43.5%]">
        <p className="text-white text-[10px] opacity-50">Copyright © 2024 Karbon. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignUp;
