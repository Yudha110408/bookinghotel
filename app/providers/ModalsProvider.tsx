"use client";

// import LoginModal from "../";
// import RegisterModal from "@/components/modal/RegisterModal";
// import RentModal from "@/components/modal/RentModal";
// import SearchModal from "@/components/modal/SearchModal";

import LoginModal from "@/app/components/modal/LoginModal";
import RegisterModal from "@/app/components/modal/RegisterModal";

const modalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      {/*<SearchModal />*/}
      {/*<RentModal />*/}
    </>
  );
};

export default modalProvider;
