import { EmiDetails } from "./emi-details";

export class LoanDetails {
    loanId:number;
    loanPrincipalAmt:string;
    rateOfInterest:string;
    loanTenure:string;
    status:string;
    emiDetails:EmiDetails;
}
