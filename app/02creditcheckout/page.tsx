"use client";
import { useState } from "react";

export default function Checkout() {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [isFrontSide, setIsFrontSide] = useState(true);

  const handleCardNumberChange = (e: any) => {
    const value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const formattedValue = value.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(formattedValue);
  };

  const handleHolderNameChange = (e: any) => {
    setHolderName(e.target.value);
  };

  const handleExpiryDateChange = (e: any) => {
    const value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const formattedValue = value.match(/.{1,2}/g)?.join("/") || "";
    setExpiryDate(formattedValue);
  };

  const handleCvvChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9]/gi, "");
    setCvv(value);
  };

  const handleSideChange = (e: any) => {
    setIsFrontSide(!isFrontSide);
  };

  const onSubmit = () => {
    console.log(cardNumber);
    console.log(holderName);
    console.log(expiryDate);
    console.log(cvv);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-300 to-slate-700 flex justify-center items-center">
      <div className="bg-white rounded-xl w-96 h-64 ">
        {isFrontSide ? (
          <div className="p-6">
            <div className="flex justify-between">
              <p className="font-extrabold text-xl">Checkout</p>
              <div className="flex">
                <div className=" w-8 h-8 rounded-full bg-[#EB001B] opacity-90"></div>
                <div className=" w-8 h-8 rounded-full bg-[#F79E1B] opacity-90 -translate-x-2"></div>
              </div>
            </div>

            <div className="bg-yellow-500 w-16 h-12 rounded-md mt-4 "></div>

            <input
              type="text"
              name="cardnumber"
              id=""
              maxLength={19}
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="0000 0000 0000 0000"
              className="mt-4 border-none w-60  outline-none text-2xl font-semibold"
            />

            <div className="flex justify-between">
              <input
                type="text"
                name="holdername"
                id=""
                value={holderName}
                onChange={handleHolderNameChange}
                placeholder="John Doe "
                className="mt-4 border-none outline-none text-lg font-semibold"
              />

              <input
                type="text"
                name=""
                id=""
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength={5}
                placeholder="00/00"
                className="mt-4 border-none w-16 outline-none text-lg font-semibold"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-black w-full h-12 mt-6"></div>

            <div className="p-6 w-full h-full">
              <input
                type="text"
                name=""
                id=""
                value={cvv}
                onChange={handleCvvChange}
                placeholder="000"
                maxLength={3}
                className="w-full p-4 text-right outline-none border-none bg-slate-300 text-md font-semibold "
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col ml-4 space-y-4">
        <button
          className="bg-white rounded-xl p-6 text-lg font-semibold"
          onClick={handleSideChange}
        >
          Turn Around
        </button>
        <button
          className="bg-white rounded-xl p-6 text-lg font-semibold"
          onClick={onSubmit}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
