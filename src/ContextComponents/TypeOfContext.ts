export interface DateTimeContextType {
    selectDateTime: any[];
    handleSelectDateTime: (newDateTime: any) => void;
    handleSendDateTime: (event: any) => Promise<void>;
    showGoButton: boolean;
    showOriginButton: boolean;
    firstValue: any;
    secondOptions: any[];
    handleFirstAutocompleteChange: (event: any, newValue: any) => void;
    secondItem: any;
    handleSecondAutocompleteChange: (event: any, newItem: any) => void;
    handleDeleteFirstBooking: () => Promise<void>;
    handleResetBooking: () => void;
    notbooking: boolean;
    setNotbooking: React.Dispatch<React.SetStateAction<boolean>>;
    handleConfirmBooking: () => Promise<void>;
}


export interface SignInContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    passwordPattern: RegExp;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    isLoggin: boolean;
    setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>;
    StorageEmail: string | null;
    StoragePassword: string | null;
    handleSubmitResendPassword: (event: React.FormEvent<HTMLFormElement>) => void;
  }