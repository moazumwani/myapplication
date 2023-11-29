import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./linechart.css";

export const Activity = () => {
  const data = [
    { name: "Maxwell", email: "Maxwell@gmail.com", spend: 1000, country: "US" },
    { name: "Smith", email: "smith@gmail.com", spend: 1500, country: "CA" },
    {
      name: "Alice Smith",
      email: "alice@gmail.com",
      spend: 800,
      country: "GB",
    },
    { name: "Bob Johnson", email: "bob@gmail.com", spend: 1200, country: "FR" },
    {
      name: "Eva Watsom",
      email: "evawatson@gmail.com",
      spend: 2000,
      country: "JP",
    },
    {
      name: "Shane Watsom",
      email: "watson@gmail.com",
      spend: 10000,
      country: "IN",
    },
  ];

  return (
    <div className="container-customer-activity">
      <div className="container-customer  relative overflow-x-auto  ">
       
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          style={{ width: "100%" }}
        >
          <caption className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mb-2">
            Customer Information
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Spend ($)
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <td class="px-6 py-4">{row.name}</td>
                <td class="px-6 py-4">{row.email}</td>
                <td class="px-6 py-4">${row.spend}</td>
                <td class="px-6 py-4">
                  <ReactCountryFlag
                    countryCode={row.country}
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-activity bg-gray-50  ">
        <div class="p-3 mb-2 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h className="text-medium text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            Recent Activity <br/>
          </h>
          <hr className="flex-grow h-1 border-t border-gray-200 dark:border-gray-700 mx-4" />
          <time class="text-lg font-semibold text-gray-900 dark:text-white">
            Today
          </time>
          <hr className="flex-grow h-0 border-t border-gray-200 dark:border-gray-700 mx-4" />
          <ol class="mt-2 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a
                href="#"
                class="items-center block p-2 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" aria-hidden
                  alt="Jese Leos image"
                />
                <div class="text-gray-600 dark:text-gray-400">
                  <div class="text-base font-normal">
                    <span class="font-small text-gray-900 dark:text-white">
                      Jese Leos
                    </span>{" "}
                    likes{" "}
                    <span class="font-small text-gray-900 dark:text-white">
                      Bonnie Green's
                    </span>{" "}
                    post in{" "}
                    <span class="font-small text-gray-900 dark:text-white">
                      {" "}
                      How to start with Flowbite library
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="items-center block p-2 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" aria-hidden
                  alt="Bonnie Green image"
                />
                <div>
                  <div class="text-base font-sm text-gray-600 dark:text-gray-400">
                    <span class="font-small text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>{" "}
                    react to{" "}
                    <span class="font-small text-gray-900 dark:text-white">
                      Thomas Lean's
                    </span>{" "}
                    comment
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
        <div class="p-3 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <time class="text-lg font-semibold text-gray-900 dark:text-white">
            Yestarday
          </time>
          <ol class="mt-2 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a
                href="#"
                class="items-center block p-1 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" aria-hidden
                  alt="Laura Romeros image"
                />
                <div class="text-gray-600 dark:text-gray-400">
                  <div class="text-base font-normal">
                    <span class="font-small text-gray-900 dark:text-white">
                      Laura Romeros
                    </span>{" "}
                    likes{" "}
                    <span class="font-small text-gray-900 dark:text-white">
                      Bonnie Green's
                    </span>{" "}
                    post in{" "}
                    <span class="font-small text-gray-900 dark:text-white">
                      {" "}
                      How to start with  library
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" aria-hidden
                  alt="Mike Willi image"
                />
                <div>
                  <div class="text-base font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-small text-gray-900 dark:text-white">
                      Mike Willi
                    </span>{" "}
                    react to{" "}
                    <span class="font-small text-gray-900 dark:text-white">
                      Thomas Lean's
                    </span>{" "}
                    comment
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
