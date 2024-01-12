import { Dispatch, SetStateAction } from 'react';
type OptionKey = '個人解析' | '多人解析' | '親子解析' | '團體解析';
export interface DateTimeInterface {
    selectDateTime: Date[]; 
    handleSelectDateTime: (newDateTime: Date[]) => void;
    handleSendDateTime: (event: Event) => void;
    showGoButton: boolean;
    showOriginButton: boolean;
    firstValue: string | null;
    secondOptions: string[];
    handleFirstAutocompleteChange: ( newValue: OptionKey ) => void;
    secondItem: string | null;
    handleSecondAutocompleteChange: (newItem: OptionKey ) => void;
    handleDeleteFirstBooking: () => void;
    handleResetBooking: () => void;
    notbooking: boolean;
    setNotbooking: (value: boolean) => void;
    handleConfirmBooking: () => void;
  }


export interface NoAuthDateTimeInterface{
    selectDateTime: Date[];
    handleSelectDateTime: (newDateTime: any) => void;
    handleSendDateTime: (event: any) => Promise<void>;
    showGoButton: boolean;
    showOriginButton: boolean;
    firstValue: string | null;
    secondOptions: string[];
    handleFirstAutocompleteChange: ( newValue: OptionKey ) => void;
    secondItem: string | null;
    handleSecondAutocompleteChange: (newItem: OptionKey ) => void;
    handleDeleteFirstBooking: () => Promise<void>;
    handleResetBooking: () => void;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    handleSendEmail: () => Promise<void>;
}


export interface ReBookingInterface{
    selectDateTime: Date[]; 
    handleSelectDateTime: (newDateTime: Date[]) => void;
    handleSendDateTime: (event: Event) => void;
    showGoButton: boolean;
    showOriginButton: boolean;
    firstValue: string | null;
    secondOptions: string[];
    setSelectDateTime: (newSelectDateTime: Date[]) => void;
    setFirstValue: Dispatch<SetStateAction<string | null>>;
    setSecondItem:Dispatch<SetStateAction<string | null>>;
    setShowGoButton:Dispatch<SetStateAction<boolean>>;
    handleFirstAutocompleteChange: ( newValue: OptionKey ) => void;
    secondItem: string | null;
    handleSecondAutocompleteChange: (newItem: OptionKey ) => void;
    handleDeleteFirstBooking: () => void;
    handleResetBooking: () => void;
    notbooking: boolean;
    setNotbooking: (value: boolean) => void;
    handleConfirmBooking: () => void;
}

export interface SendEmailInterface{
    handleSendEamil:() => Promise<void>;
}


export interface SignInInterface {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    passwordPattern: RegExp;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    isLoggin: boolean;
    setIsLoggin: Dispatch<SetStateAction<boolean>>;
    StorageEmail: string | null;
    StoragePassword: string | null;
    handleSubmitResendPassword: (event: React.FormEvent) => Promise<void>;
}

export interface SignUpInterface {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
    passwordPattern: RegExp;
    rememberMe: boolean;
    setRememberMe: Dispatch<SetStateAction<boolean>>;
    emailValue: string;
  }