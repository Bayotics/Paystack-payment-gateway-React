import { useState } from "react"
import PaystackPop from "@paystack/inline-js"
const PaystackImplementation = () => {

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const payWithPaystack = (event) => {
        event.preventDefault()
        console.log("Working Fine!!!!!!!!!!!!!!!!!")
        const paystack = new PaystackPop();
        paystack.newTransaction ({
            key: "pk_test_8d9e427702c5b457180503dd7a71fc3c41e276de",
            amount: amount * 100,
            email,
            firstName,
            lastName
        })
    }

    return(
        <div className="bg-gray-100 h-screen w-full pt-36">
            <div className="w-96 h-96 ml-96 border">
            <form className= "grid mt-24 gap-4 grid-cols-2" id="paymentForm" onSubmit={payWithPaystack}>
                <div className="form-group ">
                    <label htmlFor="email">Email Address</label>
                    <input className="border rounded-md" type="email" value={email} onChange = {(e) => setEmail(e.target.value)} id="email-address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)} id="email-address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" value={firstName} onChange = {(e) => setFirstName(e.target.value)} id="email-address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" value={lastName} onChange = {(e) => setLastName(e.target.value)} id="email-address" required />
                </div>
                <div className="form-submit">
                    <button className = "ml-36 rounded-md border bg-gray w-24" type="submit"> Pay </button>
                </div>
            </form>
            </div>
            
        </div>
        
    )
}

export default PaystackImplementation