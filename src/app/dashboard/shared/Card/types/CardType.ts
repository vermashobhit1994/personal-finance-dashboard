export interface CardType {
    logo: {
        ImagePath: string;
        AltText: string;
    }, 
    label:{
        label: string;
    }, 
    amount:{
        currencySymbol: string;
        accountBalance: string;
    }


}