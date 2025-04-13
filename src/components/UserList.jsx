import React from "react";
import { useLocation } from "react-router-dom";

const UserList = (props) => {
  // const {input} =props;
  const location = useLocation();
  const input = location.state;
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase bg-gray-400 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Firstname
              </th>
              <th scope="col" className="px-6 py-3">
                Lastname
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile Number
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-gray-500  border-gray-300">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {input.email}
              </th>
              <td className="px-6 py-4"> {input.fname}</td>
              <td className="px-6 py-4"> {input.lname}</td>
              <td className="px-6 py-4"> {input.pno}</td>
              <td className="px-6 py-4"> {input.company}</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
