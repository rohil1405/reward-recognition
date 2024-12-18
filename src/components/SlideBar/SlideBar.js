import "./SlideBar.css";
import { Link } from "react-router-dom";

const SlideBar = () => {
  return (
    <div className="slideBar-wrap">
      <div className="slideBar">
        <div className="slideBar-content">
          <ul>
            <li className="active">
              <Link to="/">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                >
                  <path
                    d="M0 0 C8.00846079 3.9345916 8.00846079 3.9345916 10 7 C10.51709853 11.04708748 10.34942192 14.94282331 10 19 C7.36 19 4.72 19 2 19 C2 17.02 2 15.04 2 13 C1.34 13 0.68 13 0 13 C0 14.98 0 16.96 0 19 C-2.64 19 -5.28 19 -8 19 C-9.22690583 8.62242152 -9.22690583 8.62242152 -6.21875 4.64453125 C-4.21680032 2.93511999 -2.22223379 1.40873749 0 0 Z M-3.25 5.4375 C-5.80825178 9.18351154 -5.33888266 12.59452536 -5 17 C-4.01 17 -3.02 17 -2 17 C-2 15.02 -2 13.04 -2 11 C-0.02 11 1.96 11 4 11 C4 12.98 4 14.96 4 17 C4.99 17 5.98 17 7 17 C7.57356722 10.88901845 7.57356722 10.88901845 5.25 5.4375 C2.04937035 3.39265328 -0.04937035 3.39265328 -3.25 5.4375 Z "
                    fill="#1c1c1c"
                    transform="translate(10,1)"
                  />
                </svg>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/my-recognitions">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path
                    d="M0 0 C2.4375 1 2.4375 1 4 3 C5.02008914 6.55897768 5.37340526 9.7440005 4.3125 13.3125 C1.85483814 16.47235096 0.08414556 17.83853151 -3.9375 18.4375 C-7.84148421 17.87978797 -9.36849493 16.93224851 -12 14 C-12.94477541 10.22089837 -13.68540021 6.63009275 -12 3 C-8.6528442 -0.74881449 -4.69303153 -0.67456305 0 0 Z "
                    fill="#1c1c1c"
                    transform="translate(14,1)"
                  />
                </svg>
                <span>Reward</span>
              </Link>
            </li>

            <li>
              <Link to="/profile">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                >
                  <path
                    d="M0 0 C3 0.25 3 0.25 5 2.25 C5.25 5.25 5.25 5.25 5 8.25 C3 10.25 3 10.25 0 10.5 C-3 10.25 -3 10.25 -5 8.25 C-5.25 5.25 -5.25 5.25 -5 2.25 C-3 0.25 -3 0.25 0 0 Z "
                    fill="#1c1c1c"
                    transform="translate(11,1.75)"
                  />
                  <path
                    d="M0 0 C2.625 2 2.625 2 4 4 C1.12699457 6.87300543 -1.0034322 6.30021547 -5 6.3125 C-6.258125 6.32925781 -7.51625 6.34601562 -8.8125 6.36328125 C-10.3903125 6.18345703 -10.3903125 6.18345703 -12 6 C-12.66 5.01 -13.32 4.02 -14 3 C-9.63941881 -0.8054146 -5.58371882 -0.88115164 0 0 Z "
                    fill="#1c1c1c"
                    transform="translate(16,14)"
                  />
                </svg>
                <span>Profile</span>
              </Link>
            </li>

            <li>
              <Link to="/">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                >
                  <path
                    d="M0 0 C1.98 0 3.96 0 6 0 C6 0.99 6 1.98 6 3 C7.65 3 9.3 3 11 3 C12.93103448 13.13793103 12.93103448 13.13793103 11 17 C9.35 17 7.7 17 6 17 C6 17.99 6 18.98 6 20 C4.02 20 2.04 20 0 20 C0 19.01 0 18.02 0 17 C-1.65 17 -3.3 17 -5 17 C-6.93103448 6.86206897 -6.93103448 6.86206897 -5 3 C-3.35 3 -1.7 3 0 3 C0 2.01 0 1.02 0 0 Z M-2 7 C-2.5 10 -2.5 10 -2 13 C0.76148156 15.31140296 0.76148156 15.31140296 3.5625 14.6875 C5.98114611 14.08760162 5.98114611 14.08760162 8 13 C8.2502157 10.08365871 8.2502157 10.08365871 8 7 C3.90086392 4.26724261 2.09913608 4.26724261 -2 7 Z "
                    fill="#1c1c1c"
                    transform="translate(8,1)"
                  />
                  <path
                    d="M0 0 C2.625 0.375 2.625 0.375 5 1 C5.625 3.375 5.625 3.375 6 6 C5.34 6.66 4.68 7.32 4 8 C1.375 7.625 1.375 7.625 -1 7 C-1.625 4.625 -1.625 4.625 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z M1 3 C1 3.66 1 4.32 1 5 C1.66 5 2.32 5 3 5 C3 4.34 3 3.68 3 3 C2.34 3 1.68 3 1 3 Z "
                    fill="#D2D2D2"
                    transform="translate(9,7)"
                  />
                </svg>
                <span>Setting</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
