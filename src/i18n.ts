// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const resources = {
    en: {
        translation: {
            error: "Error",
            accountNotExist: "Account with entered email does not exist",
            invalidRoleRedirect: "Invalid Role, Redirecting to dashboard",
            invalidLogin: "Invalid Login Credentials",
            loginSuccess: "Login Successful",
            success: "Success",
            loginFailed: "Login Failed, Try Again",
            admin: "Admin",
            signIn: "Sign In",
            signInGoogle: "Sign in with Google",
            signInApple: "Sign in with Apple ID",
            signInEmail: "or sign in with email",
            enterPassword: "Enter Password",
            welcome: "Welcome",
            password: "Password",
            proceed: "Proceed",
            back: "Back",
            failed: "Failed",
            unableToComplete: "We were not able to complete your contribution. You can try again",
            close: "Close",
            successful: "Successful",
            contributionSuccessful: "Your contribution of was successful.",
            tokenSale: "Token Sale",
            claimToken: "Claim Token",
            settings: "Settings",
            termsOfService: "Terms of Service",
            privacyPolicy: "Privacy Policy",
            connectWithUs: "Connect with us",
            invalidLink: "You just tried to access a link that doesn't exist",
            whoa: "Whoa",
            backHome: "Back Home",
            notThereYet: "You’re not there yet",
            purchaseMin: "You need to purchase a minimum of before you are eligible to request payouts",
            copyReferral: "Copy your unique referral code and earn 2.5% commissions from every investment made by your referred investors",
            copied: "Copied",
            copy: "Copy",
            shareOn: "Share on",
            payout: "Payout",
            payoutProcessing: "is being processed",
            payoutRequestReceived: "Your payout request has been received and it is being processed. You will receive it in your registered wallet within the next 24 hours",
            termsConditions: "Terms and Conditions",
            agreeTerms: "By participating in the Karbon token seed sale, you agree to abide by the following terms",
            tokenDiscount: "Tokens are sold at a discounted price, subject to a 6-month vesting period for seed investors",
            noGuarantee: "The purchase of tokens does not guarantee any returns or profits",
            amendCancel: "Karbon Finance reserves the right to amend or cancel the token sale at any time without prior notice",
            ownResearch: "Investors must conduct their own research and seek financial advice before investing",
            notLiable: "Karbon Finance is not liable for any losses incurred as a result of token purchases",
            acceptTerms: "By purchasing tokens, you acknowledge and accept these terms and conditions",
            switchWallet: "Do you want to switch wallet?",
            connectedNewWallet: "You have connected to a new wallet that is different from a previous one",
            previousWallet: "Previous Wallet",
            newWallet: "New Wallet",
            switchToNewWallet: "Switch to New Wallet",
            walletConnected: "Wallet Connected Successfully",
            walletConnectionFailed: "Wallet Connection Failed, Try Again",
            connectWallet: "Connect Wallet",
            profile: "Profile",
            walletSettings: "Wallet Settings",
            signOut: "Sign Out",
            tokenSaleDApp: "Token Sale DApp",
            invalidPath: "Invalid Path",
            enterOTP: "Enter a valid OTP",
            invalidOTP: "The One Time Password you entered is not valid",
            otpSuccess: "OTP Verification Successful",
            otpFailed: "OTP Verification Failed",
            passwordResetSuccess: "Password Reset Successful",
            passwordResetFailed: "Password Reset Failed, Try Again",
            resetPassword: "Reset Password",
            createNewPassword: "Create a new password",
            minCharacters: "Must contain at least 10 characters",
            upperCase: "Upper case character",
            lowerCase: "Lower case character",
            number: "Number",
            specialCharacter: "Special Character",
            confirmPassword: "Confirm Password",
            passwordMismatch: "Password does not match",
            backToLogin: "Back to Login",
            invalidExpiredOTP: "Invalid or Expired OTP",
            chanceToBuy: "A chance to buy Karbon tokens at half of the launch price",
            noAccount: "Don't have an account",
            signUp: "Sign Up",
            otpSent: "An OTP has been sent to",
            verifyEmail: "Verify Email",
            emailNotVerified: "Your email is not verified",
            enterVerificationCode: "Enter the four digit verification code sent to",
            enterValidConfirmPassword: "Enter a valid confirm password",
            invalidConfirmPassword: "Invalid Confirm Password",
            enterValidPassword: "Enter a valid password",
            invalidPassword: "Invalid Password",
            registrationSuccess: "Registration Successful",
            registrationFailed: "Registration Failed, Try Again",
            createAccount: "Create an account",
            signUpGoogle: "Sign up with Google",
            signUpApple: "Sign up with Apple ID",
            signUpEmail: "or sign up with email",
            agreeToTerms: "By creating an account, I agree to Karbon's",
            alreadyHaveAccount: "Already have an account?",
            otpSentTo: "A four-digit verification code was sent to",
            notYourEmail: "Not your email?",
            changeEmail: "change email",
            createPassword: "Create a password",
            passwordChangeSuccess: "Password Changed Successfully",
            passwordChangeFailed: "Password Change Failed, Try Again",
            passwordsDoNotMatch: "Passwords do not match",
            minLength: "Password must be at least 10 characters long",
            mustContainNumber: "Password must contain at least one number",
            mustContainUpper: "Password must contain at least one capital letter",
            mustContainSpecial: "Password must contain at least one special character",
            newPasswordSame: "New password cannot be the same as the current password",
            referralLink: "Referral Link",
            email: "Email",
            newPassword: "New Password",
            changePassword: "Change Password",
            confirmNewPassword: "Confirm New Password",
            gaziantep: "Gaziantep, Türkiye",
            wallet: "Wallet",
            profileSettings: "Profile Settings",
            walletAddress: "WALLET ADDRESS",
            connectYourWallet: "Connect Your Wallet",
            network: "Network",
            ethereum: "Ethereum",
            disconnectWallet: "Disconnect Wallet",
            contributionSuccess: "Your contribution was successful",
            contributionFailed: "Your contribution Failed",
            enterAmount: "You need to enter an amount",
            buyWithPaypal: "Buy with Paypal",
            youBuy: "You Buy",
            youGet: "You Get",
            payWithPaypal: "Pay with Paypal",
            confirmContribution: "Confirm Contribution",
            outputEstimated: "Output is estimated, you will receive your token with a transaction fee taken",
            price: "Price",
            approvalError: "There was an error during the approval process",
            approvalFailed: "Approval Failed",
            buyFailed: "Buy Failed",
            buyError: "There was an error during the buy process",
            approvalSuccessful: "Approval Successful",
            purchasingNow: "Purchasing Now",
            transactionFailed: "The transaction failed. Please try again",
            disclaimer: "Disclaimer",
            acknowledgeRisks: "By participating in the Karbon token seed sale, you acknowledge that tokens are sold at a discounted price, 50% of the launch price. Additionally, there is a 6-month vesting period before seed investors can start claiming tokens. Please be aware of the risks involved in cryptocurrency investments, including market volatility and regulatory uncertainties. Karbon Finance does not guarantee any returns or profits from token purchases. We recommend conducting thorough research and seeking advice from financial professionals before investing. Karbon Finance reserves the right to amend or cancel the token sale at any time without prior notice",
            continueToBuy: "Continue to Buy",
            buyWithUsdt: "Buy with USDT",
            approveUsdt: "Approve USDT",
            swappingThrough: "Swapping through",
            proceedInWallet: "Proceed in your wallet",
            confirmSwap: "Confirm Swap",
            saleStartsIn: "SALE STARTS IN",
            payoutRequestSuccess: "Payout Request was made successfully",
            connectWeb3Wallet: "For maximum payment experience, connect a crypto/web3 wallet to buy with USDT",
            supportedNetwork: "Supported network is Ethereum",
            noWallet: "Don’t have a wallet?",
            skip: "Skip",
            unclaimedBonus: "UNCLAIMED BONUS",
            referrals: "Referrals",
            requestPayout: "Request Payout",
            claimedBonus: "CLAIMED BONUS",
            totalReferrals: "TOTAL REFERRALS",
            startEarning: "Start earning extra money",
            amountSpent: "AMOUNT SPENT",
            transactions: "Transactions",
            tokensBought: "TOKENS BOUGHT",
            tokenValue: "TOKEN VALUE",
            estimatedClaimTime: "ESTIMATED CLAIM TIME",
            presaleProgress: "Presale Progress",
            contribute: "Contribute",
            buyWithCreditCard: "Buy with Credit Card",
            buyWithPaypal2: "Buy with PayPal",
            byContributing: "By contributing to the presale you acknowledge and accept these",
            chanceBuy: "A chance to buy Karbon tokens at half of the launch price",
        }
    },
    de: {
        translation: {
            error: "Fehler",
            accountNotExist: "Konto mit eingegebener E-Mail existiert nicht",
            invalidRoleRedirect: "Ungültige Rolle, Weiterleitung zum Dashboard",
            invalidLogin: "Ungültige Anmeldeinformationen",
            loginSuccess: "Anmeldung erfolgreich",
            success: "Erfolg",
            loginFailed: "Anmeldung fehlgeschlagen, versuchen Sie es erneut",
            admin: "Admin",
            signIn: "Anmelden",
            signInGoogle: "Mit Google anmelden",
            signInApple: "Mit Apple-ID anmelden",
            signInEmail: "oder mit E-Mail anmelden",
            enterPassword: "Passwort eingeben",
            welcome: "Willkommen",
            password: "Passwort",
            proceed: "Fortfahren",
            back: "Zurück",
            failed: "Gescheitert",
            unableToComplete: "Wir konnten Ihren Beitrag nicht abschließen. Sie können es erneut versuchen",
            close: "Schließen",
            successful: "Erfolgreich",
            contributionSuccessful: "Ihr Beitrag war erfolgreich.",
            tokenSale: "Token-Verkauf",
            claimToken: "Token beanspruchen",
            settings: "Einstellungen",
            termsOfService: "Nutzungsbedingungen",
            privacyPolicy: "Datenschutzrichtlinie",
            connectWithUs: "Verbinden Sie sich mit uns",
            invalidLink: "Sie haben gerade versucht, auf einen Link zuzugreifen, der nicht existiert",
            whoa: "Wow",
            backHome: "Zurück zur Startseite",
            notThereYet: "Du bist noch nicht da",
            purchaseMin: "Sie müssen mindestens kaufen, bevor Sie Auszahlungen anfordern können",
            copyReferral: "Kopieren Sie Ihren eindeutigen Empfehlungscode und verdienen Sie 2,5 % Provisionen von jeder Investition Ihrer geworbenen Investoren",
            copied: "Kopiert",
            copy: "Kopieren",
            shareOn: "Teilen auf",
            payout: "Auszahlung",
            payoutProcessing: "wird bearbeitet",
            payoutRequestReceived: "Ihre Auszahlungsanforderung wurde erhalten und wird bearbeitet. Sie erhalten sie innerhalb der nächsten 24 Stunden in Ihrer registrierten Brieftasche",
            termsConditions: "Geschäftsbedingungen",
            agreeTerms: "Durch die Teilnahme am Karbon-Token-Seed-Verkauf stimmen Sie den folgenden Bedingungen zu",
            tokenDiscount: "Tokens werden zu einem ermäßigten Preis verkauft, vorbehaltlich einer 6-monatigen Sperrfrist für Seed-Investoren",
            noGuarantee: "Der Kauf von Tokens garantiert keine Renditen oder Gewinne",
            amendCancel: "Karbon Finance behält sich das Recht vor, den Token-Verkauf jederzeit ohne vorherige Ankündigung zu ändern oder zu stornieren",
            ownResearch: "Investoren müssen ihre eigene Recherche durchführen und sich vor der Investition finanziell beraten lassen",
            notLiable: "Karbon Finance haftet nicht für Verluste, die durch den Kauf von Tokens entstehen",
            acceptTerms: "Durch den Kauf von Tokens erkennen Sie diese Bedingungen an und akzeptieren sie",
            switchWallet: "Möchten Sie die Brieftasche wechseln?",
            connectedNewWallet: "Sie haben eine neue Brieftasche verbunden, die sich von einer vorherigen unterscheidet",
            previousWallet: "Vorherige Brieftasche",
            newWallet: "Neue Brieftasche",
            switchToNewWallet: "Zu neuer Brieftasche wechseln",
            walletConnected: "Brieftasche erfolgreich verbunden",
            walletConnectionFailed: "Brieftaschenverbindung fehlgeschlagen, versuchen Sie es erneut",
            connectWallet: "Brieftasche verbinden",
            profile: "Profil",
            walletSettings: "Brieftaschen-Einstellungen",
            signOut: "Abmelden",
            tokenSaleDApp: "Token-Verkaufs-DApp",
            invalidPath: "Ungültiger Pfad",
            enterOTP: "Geben Sie ein gültiges OTP ein",
            invalidOTP: "Das eingegebene Einmalpasswort ist ungültig",
            otpSuccess: "OTP-Verifizierung erfolgreich",
            otpFailed: "OTP-Verifizierung fehlgeschlagen",
            passwordResetSuccess: "Passwort erfolgreich zurückgesetzt",
            passwordResetFailed: "Passwort-Zurücksetzung fehlgeschlagen, versuchen Sie es erneut",
            resetPassword: "Passwort zurücksetzen",
            createNewPassword: "Neues Passwort erstellen",
            minCharacters: "Muss mindestens 10 Zeichen enthalten",
            upperCase: "Großbuchstaben",
            lowerCase: "Kleinbuchstaben",
            number: "Nummer",
            specialCharacter: "Sonderzeichen",
            confirmPassword: "Passwort bestätigen",
            passwordMismatch: "Passwörter stimmen nicht überein",
            backToLogin: "Zurück zur Anmeldung",
            invalidExpiredOTP: "Ungültiges oder abgelaufenes OTP",
            chanceToBuy: "Eine Chance, Karbon-Token zum halben Startpreis zu kaufen",
            noAccount: "Haben Sie kein Konto",
            signUp: "Anmelden",
            otpSent: "Ein OTP wurde an gesendet",
            verifyEmail: "E-Mail bestätigen",
            emailNotVerified: "Ihre E-Mail ist nicht verifiziert",
            enterVerificationCode: "Geben Sie den vierstelligen Bestätigungscode ein, der an gesendet wurde",
            enterValidConfirmPassword: "Geben Sie ein gültiges Bestätigungspasswort ein",
            invalidConfirmPassword: "Ungültiges Bestätigungspasswort",
            enterValidPassword: "Geben Sie ein gültiges Passwort ein",
            invalidPassword: "Ungültiges Passwort",
            registrationSuccess: "Registrierung erfolgreich",
            registrationFailed: "Registrierung fehlgeschlagen, versuchen Sie es erneut",
            createAccount: "Ein Konto erstellen",
            signUpGoogle: "Mit Google anmelden",
            signUpApple: "Mit Apple-ID anmelden",
            signUpEmail: "oder mit E-Mail anmelden",
            agreeToTerms: "Durch die Erstellung eines Kontos stimme ich den Nutzungsbedingungen von Karbon zu",
            alreadyHaveAccount: "Haben Sie schon ein Konto?",
            otpSentTo: "Ein vierstelliger Bestätigungscode wurde an gesendet",
            notYourEmail: "Nicht Ihre E-Mail?",
            changeEmail: "E-Mail ändern",
            createPassword: "Ein Passwort erstellen",
            passwordChangeSuccess: "Passwort erfolgreich geändert",
            passwordChangeFailed: "Passwortänderung fehlgeschlagen, versuchen Sie es erneut",
            passwordsDoNotMatch: "Passwörter stimmen nicht überein",
            minLength: "Passwort muss mindestens 10 Zeichen lang sein",
            mustContainNumber: "Passwort muss mindestens eine Zahl enthalten",
            mustContainUpper: "Passwort muss mindestens einen Großbuchstaben enthalten",
            mustContainSpecial: "Passwort muss mindestens ein Sonderzeichen enthalten",
            newPasswordSame: "Neues Passwort darf nicht dasselbe wie das aktuelle Passwort sein",
            referralLink: "Empfehlungslink",
            email: "E-Mail",
            newPassword: "Neues Passwort",
            changePassword: "Passwort ändern",
            confirmNewPassword: "Neues Passwort bestätigen",
            gaziantep: "Gaziantep, Türkei",
            wallet: "Brieftasche",
            profileSettings: "Profil-Einstellungen",
            walletAddress: "BRIEFTASCHEN-ADRESSE",
            connectYourWallet: "Verbinden Sie Ihre Brieftasche",
            network: "Netzwerk",
            ethereum: "Ethereum",
            disconnectWallet: "Brieftasche trennen",
            contributionSuccess: "Ihr Beitrag war erfolgreich",
            contributionFailed: "Ihr Beitrag ist fehlgeschlagen",
            enterAmount: "Sie müssen einen Betrag eingeben",
            buyWithPaypal: "Mit Paypal kaufen",
            youBuy: "Sie kaufen",
            youGet: "Sie bekommen",
            payWithPaypal: "Mit Paypal bezahlen",
            confirmContribution: "Beitrag bestätigen",
            outputEstimated: "Die Ausgabe wird geschätzt, Sie erhalten Ihr Token mit einer Transaktionsgebühr",
            price: "Preis",
            approvalError: "Es gab einen Fehler während des Genehmigungsprozesses",
            approvalFailed: "Genehmigung fehlgeschlagen",
            buyFailed: "Kauf fehlgeschlagen",
            buyError: "Es gab einen Fehler während des Kaufprozesses",
            approvalSuccessful: "Genehmigung erfolgreich",
            purchasingNow: "Jetzt kaufen",
            transactionFailed: "Die Transaktion ist fehlgeschlagen. Bitte versuchen Sie es erneut",
            disclaimer: "Haftungsausschluss",
            acknowledgeRisks: "Durch die Teilnahme am Karbon-Token-Seed-Verkauf erkennen Sie an, dass Tokens zu einem ermäßigten Preis verkauft werden, 50 % des Startpreises. Zusätzlich gibt es eine 6-monatige Sperrfrist, bevor Seed-Investoren mit der Einlösung von Tokens beginnen können. Bitte seien Sie sich der Risiken bewusst, die mit Investitionen in Kryptowährungen verbunden sind, einschließlich Marktschwankungen und regulatorischen Unsicherheiten. Karbon Finance garantiert keine Renditen oder Gewinne aus Token-Käufen. Wir empfehlen, gründliche Recherchen durchzuführen und Rat von Finanzexperten einzuholen, bevor Sie investieren. Karbon Finance behält sich das Recht vor, den Token-Verkauf jederzeit ohne vorherige Ankündigung zu ändern oder zu stornieren",
            continueToBuy: "Weiter zum Kauf",
            buyWithUsdt: "Mit USDT kaufen",
            approveUsdt: "USDT genehmigen",
            swappingThrough: "Tausch über",
            proceedInWallet: "Fahren Sie in Ihrer Brieftasche fort",
            confirmSwap: "Tausch bestätigen",
            saleStartsIn: "VERKAUF BEGINNT IN",
            payoutRequestSuccess: "Auszahlungsanforderung wurde erfolgreich gestellt",
            connectWeb3Wallet: "Für das beste Zahlungserlebnis verbinden Sie eine Krypto/Web3-Brieftasche, um mit USDT zu kaufen",
            supportedNetwork: "Unterstütztes Netzwerk ist Ethereum",
            noWallet: "Haben Sie keine Brieftasche?",
            skip: "Überspringen",
            unclaimedBonus: "NICHT EINGEFORDERTER BONUS",
            referrals: "Empfehlungen",
            requestPayout: "Auszahlung anfordern",
            claimedBonus: "EINGEFORDERTER BONUS",
            totalReferrals: "GESAMTZAHL DER EMPFEHLUNGEN",
            startEarning: "Beginnen Sie, zusätzliches Geld zu verdienen",
            amountSpent: "AUSGEGEBENER BETRAG",
            transactions: "Transaktionen",
            tokensBought: "GEKAUFTE TOKEN",
            tokenValue: "TOKENWERT",
            estimatedClaimTime: "GESCHÄTZTE EINLÖSEZEIT",
            presaleProgress: "Vorverkaufsfortschritt",
            contribute: "Beitragen",
            buyWithCreditCard: "Mit Kreditkarte kaufen",
            buyWithPaypal2: "Mit PayPal kaufen",
            byContributing: "Durch die Teilnahme am Vorverkauf erkennen Sie diese an und akzeptieren diese",
            chanceBuy: "Eine Chance, Karbon-Token zum halben Startpreis zu kaufen",
        }
    },
    tr: {
        translation: {
            error: "Hata",
            accountNotExist: "Girilen e-posta ile hesap bulunamadı",
            invalidRoleRedirect: "Geçersiz Rol, panele yönlendiriliyor",
            invalidLogin: "Geçersiz Giriş Bilgileri",
            loginSuccess: "Giriş Başarılı",
            success: "Başarılı",
            loginFailed: "Giriş Başarısız, Tekrar Deneyin",
            admin: "Yönetici",
            signIn: "Giriş Yap",
            signInGoogle: "Google ile giriş yap",
            signInApple: "Apple ID ile giriş yap",
            signInEmail: "veya e-posta ile giriş yap",
            enterPassword: "Şifreyi Girin",
            welcome: "Hoş Geldiniz",
            password: "Şifre",
            proceed: "Devam Et",
            back: "Geri",
            failed: "Başarısız",
            unableToComplete: "Katkınızı tamamlayamadık. Tekrar deneyebilirsiniz",
            close: "Kapat",
            successful: "Başarılı",
            contributionSuccessful: "Katkınız başarılı oldu.",
            tokenSale: "Token Satışı",
            claimToken: "Token Talep Et",
            settings: "Ayarlar",
            termsOfService: "Hizmet Şartları",
            privacyPolicy: "Gizlilik Politikası",
            connectWithUs: "Bizimle iletişime geçin",
            invalidLink: "Mevcut olmayan bir bağlantıya erişmeye çalıştınız",
            whoa: "Vay",
            backHome: "Ana Sayfaya Geri Dön",
            notThereYet: "Henüz orada değilsiniz",
            purchaseMin: "Ödemeleri talep etmeye hak kazanabilmek için minimum satın alma yapmalısınız",
            copyReferral: "Benzersiz referans kodunuzu kopyalayın ve yönlendirdiğiniz yatırımcıların yaptığı her yatırımdan %2,5 komisyon kazanın",
            copied: "Kopyalandı",
            copy: "Kopyala",
            shareOn: "Paylaş",
            payout: "Ödeme",
            payoutProcessing: "işleniyor",
            payoutRequestReceived: "Ödeme talebiniz alındı ve işleniyor. Kayıtlı cüzdanınıza önümüzdeki 24 saat içinde ulaşacak",
            termsConditions: "Şartlar ve Koşullar",
            agreeTerms: "Karbon token tohum satışına katılarak aşağıdaki şartlara uymayı kabul ediyorsunuz",
            tokenDiscount: "Tokenlar indirimli fiyattan satılmaktadır ve tohum yatırımcıları için 6 aylık bir vade süresi bulunmaktadır",
            noGuarantee: "Token satın almak herhangi bir getiri veya kar garantisi vermez",
            amendCancel: "Karbon Finance, token satışını önceden haber vermeksizin herhangi bir zamanda değiştirme veya iptal etme hakkını saklı tutar",
            ownResearch: "Yatırımcılar, yatırım yapmadan önce kendi araştırmalarını yapmalı ve mali danışmanlık almalılar",
            notLiable: "Karbon Finance, token alımlarından kaynaklanan herhangi bir kayıptan sorumlu değildir",
            acceptTerms: "Token satın alarak bu şartları kabul ettiğinizi beyan edersiniz",
            switchWallet: "Cüzdanı değiştirmek istiyor musunuz?",
            connectedNewWallet: "Öncekinden farklı yeni bir cüzdan bağladınız",
            previousWallet: "Önceki Cüzdan",
            newWallet: "Yeni Cüzdan",
            switchToNewWallet: "Yeni Cüzdana Geç",
            walletConnected: "Cüzdan Başarıyla Bağlandı",
            walletConnectionFailed: "Cüzdan Bağlantısı Başarısız, Tekrar Deneyin",
            connectWallet: "Cüzdanı Bağla",
            profile: "Profil",
            walletSettings: "Cüzdan Ayarları",
            signOut: "Çıkış Yap",
            tokenSaleDApp: "Token Satış DApp'i",
            invalidPath: "Geçersiz Yol",
            enterOTP: "Geçerli bir OTP girin",
            invalidOTP: "Girdiğiniz Tek Seferlik Şifre geçersiz",
            otpSuccess: "OTP Doğrulaması Başarılı",
            otpFailed: "OTP Doğrulaması Başarısız",
            passwordResetSuccess: "Şifre Sıfırlama Başarılı",
            passwordResetFailed: "Şifre Sıfırlama Başarısız, Tekrar Deneyin",
            resetPassword: "Şifreyi Sıfırla",
            createNewPassword: "Yeni bir şifre oluştur",
            minCharacters: "En az 10 karakter içermelidir",
            upperCase: "Büyük harf",
            lowerCase: "Küçük harf",
            number: "Numara",
            specialCharacter: "Özel Karakter",
            confirmPassword: "Şifreyi Onayla",
            passwordMismatch: "Şifreler uyuşmuyor",
            backToLogin: "Girişe Dön",
            invalidExpiredOTP: "Geçersiz veya Süresi Dolmuş OTP",
            chanceToBuy: "Karbon tokenları lansman fiyatının yarısına alma şansı",
            noAccount: "Hesabınız yok mu",
            signUp: "Kaydol",
            otpSent: "Bir OTP gönderildi",
            verifyEmail: "E-postayı Doğrula",
            emailNotVerified: "E-postanız doğrulanmadı",
            enterVerificationCode: "Gönderilen dört haneli doğrulama kodunu girin",
            enterValidConfirmPassword: "Geçerli bir onay şifresi girin",
            invalidConfirmPassword: "Geçersiz Onay Şifresi",
            enterValidPassword: "Geçerli bir şifre girin",
            invalidPassword: "Geçersiz Şifre",
            registrationSuccess: "Kayıt Başarılı",
            registrationFailed: "Kayıt Başarısız, Tekrar Deneyin",
            createAccount: "Bir hesap oluştur",
            signUpGoogle: "Google ile kaydol",
            signUpApple: "Apple ID ile kaydol",
            signUpEmail: "veya e-posta ile kaydol",
            agreeToTerms: "Bir hesap oluşturarak Karbon'un Hizmet Şartlarını kabul ediyorum",
            alreadyHaveAccount: "Zaten hesabınız var mı?",
            otpSentTo: "Dört haneli bir doğrulama kodu gönderildi",
            notYourEmail: "E-postanız değil mi?",
            changeEmail: "e-postayı değiştir",
            createPassword: "Bir şifre oluştur",
            passwordChangeSuccess: "Şifre Başarıyla Değiştirildi",
            passwordChangeFailed: "Şifre Değiştirme Başarısız, Tekrar Deneyin",
            passwordsDoNotMatch: "Şifreler uyuşmuyor",
            minLength: "Şifre en az 10 karakter uzunluğunda olmalıdır",
            mustContainNumber: "Şifre en az bir sayı içermelidir",
            mustContainUpper: "Şifre en az bir büyük harf içermelidir",
            mustContainSpecial: "Şifre en az bir özel karakter içermelidir",
            newPasswordSame: "Yeni şifre mevcut şifreyle aynı olamaz",
            referralLink: "Referans Bağlantısı",
            email: "E-posta",
            newPassword: "Yeni Şifre",
            changePassword: "Şifreyi Değiştir",
            confirmNewPassword: "Yeni Şifreyi Onayla",
            gaziantep: "Gaziantep, Türkiye",
            wallet: "Cüzdan",
            profileSettings: "Profil Ayarları",
            walletAddress: "CÜZDAN ADRESİ",
            connectYourWallet: "Cüzdanınızı Bağlayın",
            network: "Ağ",
            ethereum: "Ethereum",
            disconnectWallet: "Cüzdanı Bağlantısını Kes",
            contributionSuccess: "Katkınız başarılı oldu",
            contributionFailed: "Katkınız Başarısız Oldu",
            enterAmount: "Bir miktar girmelisiniz",
            buyWithPaypal: "Paypal ile Satın Al",
            youBuy: "Satın Alırsınız",
            youGet: "Alırsınız",
            payWithPaypal: "Paypal ile Öde",
            confirmContribution: "Katkıyı Onayla",
            outputEstimated: "Çıktı tahminidir, tokeninizi bir işlem ücreti alarak alacaksınız",
            price: "Fiyat",
            approvalError: "Onay sürecinde bir hata oluştu",
            approvalFailed: "Onay Başarısız",
            buyFailed: "Satın Alma Başarısız",
            buyError: "Satın alma sürecinde bir hata oluştu",
            approvalSuccessful: "Onay Başarılı",
            purchasingNow: "Şimdi Satın Alınıyor",
            transactionFailed: "İşlem başarısız oldu. Lütfen tekrar deneyin",
            disclaimer: "Feragatname",
            acknowledgeRisks: "Karbon token tohum satışına katılarak, tokenların lansman fiyatının %50'si olan indirimli fiyattan satıldığını kabul edersiniz. Ayrıca, tohum yatırımcılarının tokenları talep etmeye başlamadan önce 6 aylık bir vade süresi bulunmaktadır. Kripto para yatırımlarıyla ilgili risklerin, piyasa dalgalanmaları ve düzenleyici belirsizlikler dahil olmak üzere farkında olun. Karbon Finance, token alımlarından kar veya getiri garanti etmez. Yatırım yapmadan önce kapsamlı araştırmalar yapmanızı ve mali uzmanlardan tavsiye almanızı öneririz. Karbon Finance, token satışını önceden haber vermeksizin herhangi bir zamanda değiştirme veya iptal etme hakkını saklı tutar",
            continueToBuy: "Satın Almaya Devam Et",
            buyWithUsdt: "USDT ile Satın Al",
            approveUsdt: "USDT Onayla",
            swappingThrough: "Aracılığıyla Takas",
            proceedInWallet: "Cüzdanınızda Devam Edin",
            confirmSwap: "Takas Onayla",
            saleStartsIn: "SATIŞ BAŞLIYOR",
            payoutRequestSuccess: "Ödeme Talebi Başarıyla Yapıldı",
            connectWeb3Wallet: "Maksimum ödeme deneyimi için, USDT ile satın almak için bir kripto/web3 cüzdanı bağlayın",
            supportedNetwork: "Desteklenen ağ Ethereum'dur",
            noWallet: "Cüzdanınız yok mu?",
            skip: "Atla",
            unclaimedBonus: "TALİP EDİLMEYEN BONUS",
            referrals: "Yönlendirmeler",
            requestPayout: "Ödeme Talep Et",
            claimedBonus: "TALİP EDİLEN BONUS",
            totalReferrals: "TOPLAM YÖNLENDİRMELER",
            startEarning: "Ekstra para kazanmaya başlayın",
            amountSpent: "HARLANAN TUTAR",
            transactions: "İşlemler",
            tokensBought: "ALINAN TOKENLER",
            tokenValue: "TOKEN DEĞERİ",
            estimatedClaimTime: "TAHMİNİ TALEP ZAMANI",
            presaleProgress: "Ön Satış İlerlemesi",
            contribute: "Katkıda Bulun",
            buyWithCreditCard: "Kredi Kartı ile Satın Al",
            buyWithPaypal2: "Paypal ile Satın Al",
            byContributing: "Ön satışa katkıda bulunarak bunları kabul ettiğinizi ve kabul ettiğinizi belirtirsiniz",
            chanceBuy: "Karbon tokenlarını lansman fiyatının yarısına alma şansı",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        resources,
        debug: true,
        fallbackLng: "en",
        returnObjects: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
