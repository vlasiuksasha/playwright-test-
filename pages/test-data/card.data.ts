export interface CardCredentials {
    cardNumber: string;
    expirationDate: string;
    securityCode: string; 
    cardholderName: string;
  }

  export const cardCredentials: CardCredentials =  {
    cardNumber: '1111-1111-1111-1111',
    expirationDate: '01/2026',
    securityCode: '111',
    cardholderName: 'Test User',
}