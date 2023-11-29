import React from "react";

export const SideBar = () => {
    
  return (
    <div>
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* <div class="px-3 py-2 bg-blue-500 text-white text-center">
      <p class="text-sm font-medium">Good afternoon, user</p>
    </div> */}
        <div class="px-3 py-3 lg:px-5 lg:pl-3 ">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD5+fnY2Nj8/Pzt7e3x8fH09PR7e3vExMTp6enc3Nw3NzeCgoLLy8vj4+O6urouLi6Li4tLS0tsbGxTU1PS0tJJSUmVlZWioqJZWVlDQ0O0tLStra1hYWGbm5shISEWFhZ9fX0bGxs0NDQrKyt0dHQ8PDwXFxcMDAweHh5XV1efn58Y1vBaAAANw0lEQVR4nNVd2ULqShBEFhEQWURkX0TloP7/910CokCmuquTmYm3HjUZ0smkl+olpVJo1CqN2Vf/bjGZvq42693NzW6zett+Lu76y1mjUgv++wFRH87bn/9uNHxM+vNhveiLNaMyHqxV2c6xXiwfqkVfNYvK8tkk3C9e241y0VevoT5bZJTuhOdlq2ghMG7HjznFO2LTrxQtigvVeda96cSoU7RAVxgOfIp3wHb+hzTP/M27fAe0m0VLdsBtP4x4Bzw9FC1eqXkXUL4Er41i5XsPLF+CVbcw+eqhn98JrwXt1ZDv3zWeC3ADZhHlS/Ae2Z9r3UcWcI95TAFf4su3Ry+an9MoRL4E/SjyVf07aDxWETTOQ4HyJViGFrBdsIA3N9PbkPI1A7nYNgT047rZr2q1fRrcvbT7o1G/3757X0xfc4gYTOFksRHrSX/e6LiptNqwuxxkMqzPQcx/eWsVbjAeMlfS6bbtYgYwjS3bFbzPTNFrudH/sP2Ad2fcYuVfR5msVnM8tYjo2Yn7on94s8xBPdS+DMp65E88g465y80DVvigs+1DtCNIlnc99sKOVcc79n76+LkEHM/rk1Dp9jgR3/38HGUltrpuazUajQpryBqcjIN8oh3BOB9v2vOrzk8bYcvqwAZlPjyIyAioXvT4/Oh79jnOGRFzb1Rii6peYu3qLq3Z6KDKRDI51Y1ug7eq/1RJn0SbzA7hz+UyGk/q8vpb5XT3eKdn7Dr9EjlMv8pXbPVCg7L7TF7Epq4JMjtwKuXLMAoTcK7B+RmpImbk/VVVxjwHTOsM+StxvMnZF2Ou7YhPykUT/CHDVZVVtypDvNhUluQ4r5q0hCXEU98Ye9S/kRcknVA5u2HxZLUA9dUqIFIQ32A3hXLrLRpCIxmM/ttSvl90lKRlUC0i3q7ktcYWAYfiUk/8Qmo4a9Lziodl4E6Alf6GZTvoWVSTiLKPteMXEl9CkxtI5FFNIspsw4JdRjT1Nj9X3g0ZRJQdyRm3iGjDrIQ6k+z3+BS5uEwKCe0Zg7VvEcV38ZFZQQpXMgTUFFduElH04IgwQ9qj9Jt8DoqLMIkossb6PhXuELUF0qDqpiwi1qWFJtrZQopwlU1Akm+1iNiRFtKcXeHU7NllKhlhEVGM7ORTBeWeIyMhbqsfWCINKewX9b2gZnIls0QTm0lEye2SyCNsTnNyy1x+1SKiEL8K14qvY5VPQC1aOcEQ9UvaBgcZWOnlL7jm6jgMIgqeyRSdg++zKbgEoCy/RUTBfUOrwADTEPIK4DLlPAMnxC3gIeJH6KmzjCsq5kUUNr77IcKn7q3qgSuK40XE+3TrOhwqUufR2cAVbtIi3uI1XP4J/HWf5UdczQPtPmF96giD4P3wWNNRYvJ1CWjWDGfC0/YNqgHP/VVchxsrInbB0w8GHem9Qp6r0mNfjU+4wvWRSPNuPMtXKlW5wi7Si8IJpGveDTlsAXqOylwVIikiZBCuTAC6FSvf4iXgwkUxCPoFthiXGx1FlGHaxrhwkSQV4EO8LGBYuw/6F0K+kp5+tYgIb9dFGgMlyn3EFE6IXNLvNVIOMXRVzh0HZAwDyVdig/4Nk7uGS52bRDC9ImSbERf0rxgRUdR3tk3RXQjaSs21F70RLhWMon49I5DTfg4oX4ktju8RK6Fzf+tFwGMO3WHMtaHe6wuhuPPH6CMLHFK6AzjqBvJKP4A1UyddDLaLlwpjGRx1o9NEyA88EbDgIcdo9deL8hKo+SS0zMlegDqVwMIdwVE3WuISGYO3478BKxdhkybgGki0i0HnHV9E8BqSdQ25wbFTSjU3auo5sopgE0ebM8axUzJdhIz+UviFtxjCHcGxU6ILiQze8QXOsKBncOyUWLCOisGT/4EgOepYGK499UtYAUVHiaoBTn7ccX9cl5PA+yEnN+HP3a6Toc7PB8pKSfI3sKeMIv3kprhtbiRr+IP6mhIRpxdBz2Kigt05f2nPB4GQZTkHTGkAs5o4fO74Pv78KZKAQ3w/cOI/SshYFDApjWOn0JUhygDujrjCHUGK6OYYEUF5C9xyc/eCF+jdPwl2bnYKHF0BTxeGK7XhQ3c2H++xPAzxeLnb4z3BIMFij8nk8+np8fF5Op1u97g/4bX39rZabf6t2VZtBLdDCUzqAyBLgJ9LNAPGgLMMFDjwM3DRTrK7bJrqEBIuaw1i6TFw6FzOQ1mfehwNDnMNzEUfiO7yHcgpAHGQ1jaAm3wBvoDDdShmRhtC+jWCjKHbaUtHFpwmj4Y0Hw9ipAmIPtNprQLGCIpI5TOAv/AMrjy1zYse05ZCqnAKODWvgCxNPcK8Y7q9IxUNA899BQjx69OZDq24SLE2gIzalNbOv1+fXtwwSIRUgxJ4CGsQG1+fzuUXYiLlOQMJd8Alvz49xkRkG1ISVsGBpIRFTvR0I+WaIlVB7tJYU595vFxfItA0O0DTXJ/+R8KmM6R8b2At1qQ9JEvRIiJFlQGLvwF9ZSmf5s8p0xQhBSRcgTqMNNtjnXwZGqkLBKHBPSiyTVN2f8yrSWdMgVPyDBxOR0MAWU8YCekAFiRJJyCwdVHeJJ0ZBZ/pywPFOQPA0zjzWLd/Yk7yAQ5WGOjCF0DggAlCxc+6PsK1xYDb1QcEDhot0Bw8HvGc0L1HkvcjP8drhDMDD1LlYxC8Z2y9B6hWy3vUE9weUTuh2Wx29mi1WpVKpZVn4OXaffAMmRGvErLg/Ht3USgKLR5Q7qmI759xbzlopUOavoVyNgV8F0yeTXUCqvNBNUN1VLcXq+brF1w9LSz8Ro5zCbFoMQuGDuCYoH+wPwGQgUki1G3yA9d4p0AmR3EDBjgjITvA7ognXALSI8QCojqHhHQEdy/qB5bIUhOhSwht8iRNCMKimN8eqnIVUVIbFKprOzSwuZePWRTFZX3EPi8UoB/+CTyJKLIdwNWXiqWEKD4/ugeAR4v2InK+mlzChOz9seICpBa9flxBAOerKTVaiM/9rkdw/5PoxvEBzlfTWrvRed9bGxSRRKmh5Xw1TUDoL3z/H7h0wRpIz8ClllWVgGzFKZAHP+Nx4gcC56vpOg9xDD9lQeD/wSswOYJSFxDeqB8TCgxSaG3KJUOISBVp0t/uTNQHGFC6ParK5GNaQKhJfx8R2i1hS6EpX42ZxgP18dndARyXnwlYAHgqiVFAPMHr7BhEAQT88Cflq1ECQj1zXiSLAlBPXxtygJr7xQ1vg8VMF6cjKjbU9yKprDmnBrDJuTgMtRz7HRL1A2rEIKnnYFXo5bXDdg5Pw+guQU2MIAXEBMiVnUFRaIiHSNFO7LgDWAezujoQ0pX+IwyKdmIFxL1EqcABHZhpwrWEMpOKoyl3bHRS7xdU374zGMxnzmgBcXCSZtLg3mGGixjA0E580gTfLseDgc/bayTMuDI8VYtHh7gat/BcI48Wg3FleAGFGh+npoJThNXBGzSYcS2GLSNsCOfx2A77GsXDZNAMAgrLgVVw478f95SZ72X4ODzK3CcAp+CH6CWbyDT6WogToUECbgQ8z9twaxGY0j+LgNI7DU8StlF+u0+QFpbUuuTcCtpYUE55y0+Uz5xZBUSDkRKshdOEVyXnq0j09pkElLqUxLhLKHZOFcdbQMT0pjhNKspWKtYExz9H3pswhCYBxfUU+kw61/JFxgsQhtAkoLieutkl3z8juUjYCZOAsmFVTxcj8GwBv97kbhJQDqEJekf0jrOEGXqO0CSgPC2bKiGRPs+0yjChXTUUNgHlKlvq+sR9miHi1wp/bXSeTIKQylDMrdtFjCggbbPFtuaecaMqIYVNycgpR8MUPVFb9WwuqmwMbWZCISINaXn5qtamgFisRjAJqHHlJipC8SMtNQyShCZnW3P9lPGY11BYP8NXw4WCC5OAmvOujxu+gtLjxLvhmE4x1Xqo3eTmAFbLn/BvECK4LEPv6ipDkMFn1pJ8U/amgXSoJRjTE46Z4h6VvmW5G2cRskXx6Ux5xthVXZjUFK4nYLjnNZ3DytwdoqZRepzZSHMOhgJkggDJUTKip8I4fXhVB9zjXYYaMUEtVxJX71H/oEzjxTttuOXMGICclVtEz+OCifzrP49xy7+CDSYhnrcZlCog7DOGozrsNoatFk+EtKgvJefvdlUClm/4L0WtcU0KPtp5ORFvll6/QNchB+L4qZ6sMtUTe/S9ld5U2Mli3kph2JmXC0PIgTEj76jX0kkicXTEapyzrKFlGGrgtc/VMEXps5v5jewsLXMpPPcPcs0735jMMiT+KyPb2A3vRejGmXS9/oMhJG3NzcPEArTW2Ye33LdnelzabIzot/xs6SB1r9nGCL8Olt2hw45Um8PucpBxNlOwBlfus9NA0uni/e4lwftgMs036SZgz9mfGBC5C9rdest9MCUkJp4/UJyCyWwEQIQu+k6R06K2cT4OU9z8PQ/FZxw6xQyGfo750Q3uy4V+EXlkTjn2RNN2aBWaRoeiUTzhMWCfoICHWK/jfeZqrNxoxPhewlv87xZdyBj6Od4XK1+CB274SjY8Fbc/z9EJpVfbBXx1CqA69/9Cbufx7YOIVp7gMY1+MeZBwYOn3brrFzDTkMWwz+UAMKZfUeeoZUFzlnkI/1u7EYRhCoBmt23lmJ5G/xvpftDpjhaMil0Nlt0/qVdI1FuN+eju6X6z2+11yG696m2nT4vBS3+0nM+6w1aoqQ0/+A9Jv8yXNWdIIAAAAABJRU5ErkJggg=="
                      aria-hidden
                      alt="user photo"
                    ></img>
                  </button>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Moazum
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      mmw@gmial.com
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar" 
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="./DCT"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">DCT</span>
                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  
                </span>
              </a>
            </li>
            <li>
              
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </aside>

      <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:black">Team management</h2>
    </div>
  );
};
