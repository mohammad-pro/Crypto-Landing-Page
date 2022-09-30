import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t to-[#4E0062] from-[#220076] ">
      <div className="container mx-auto max-w-lg md:max-w-screen-xl px-3">
        {/* Body */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto auto-cols-auto py-24 gap-y-32  border-b border-[#BCBCBC] ">
          <div className="text-[#E6E6E6] flex flex-col gap-y-8 items-start">
            <h1 className="text-white">Company</h1>
            <Link to="aboutus">
              <span className="hover:text-white transition-all duration-150">
                About us
              </span>
            </Link>
            <Link to="termsofuse">
              <span className="hover:text-white transition-all duration-150">
                Terms of use
              </span>
            </Link>
            <Link to="privacypolicy">
              <span className="hover:text-white transition-all duration-150">
                Privacy Policy
              </span>
            </Link>
            <Link to="disclaimer">
              <span className="hover:text-white transition-all duration-150">
                Disclaimer
              </span>
            </Link>
          </div>

          <div className="text-[#E6E6E6] flex flex-col  gap-y-8 items-start">
            <h1 className="text-white">Businesses</h1>
            <Link to="prime">
              <span className="hover:text-white transition-all duration-150">
                prime
              </span>
            </Link>
            <Link to="custody">
              <span className="hover:text-white transition-all duration-150">
                Custody
              </span>
            </Link>
            <Link to="assethub">
              <span className="hover:text-white transition-all duration-150">
                Asset Hub
              </span>
            </Link>
            <Link to="Commerce">
              <span className="hover:text-white transition-all duration-150">
                Commerce
              </span>
            </Link>
          </div>

          <div className="text-[#E6E6E6] flex flex-col  gap-y-8 items-start">
            <h1 className="text-white">Exchange</h1>
            <Link to="exchangehome">
              <span className="hover:text-white transition-all duration-150">
                Exchange Home
              </span>
            </Link>
            <Link to="margintrading">
              <span className="hover:text-white transition-all duration-150">
                Margin Trading
              </span>
            </Link>
            <Link to="derivativestrading">
              <span className="hover:text-white transition-all duration-150">
                Derivatives Trading
              </span>
            </Link>
            <Link to="tradingarena">
              <span className="hover:text-white transition-all duration-150">
                Trading Arena
              </span>
            </Link>
          </div>

          <div className="text-[#E6E6E6] flex flex-col  gap-y-8 items-start">
            <h1 className="text-white">Blockchain</h1>
            <Link to="chainexplorer">
              <span className="hover:text-white transition-all duration-150">
                Chain Explorer
              </span>
            </Link>
            <Link to="thesyndicate">
              <span className="hover:text-white transition-all duration-150">
                The Syndicate
              </span>
            </Link>
            <Link to="Security">
              <span className="hover:text-white transition-all duration-150">
                security
              </span>
            </Link>
            <Link to="cryptouscredit">
              <span className="hover:text-white transition-all duration-150">
                Cryptous Credit
              </span>
            </Link>
          </div>

          <div className="text-[#E6E6E6] flex flex-col  gap-y-8 items-start">
            <h1 className="text-white">Resources</h1>
            <Link to="prices">
              <span className="hover:text-white transition-all duration-150">
                Prices
              </span>
            </Link>
            <Link to="sitewidgets">
              <span className="hover:text-white transition-all duration-150">
                Site Widgets
              </span>
            </Link>
            <Link to="tax">
              <span className="hover:text-white transition-all duration-150">
                Tax
              </span>
            </Link>
            <Link to="blog">
              <span className="hover:text-white transition-all duration-150">
                Blog
              </span>
            </Link>
            <Link to="research">
              <span className="hover:text-white transition-all duration-150">
                Research
              </span>
            </Link>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex justify-between py-8">
          {/* ME :) */}
          <div className="text-[#E6E6E6] flex flex-wrap mr-3">
            Developed with{" "}
            <span className="cursor-pointer hover:text-red-700 transition-all duration-200 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                version="1"
                fill="currentColor"
              >
                <path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4 4.7 4 2.2 6.4 2.2 9.4z" />
              </svg>
            </span>
            By Mohammad Hossein
          </div>
          {/* Social */}
          <div className="flex gap-x-3">
            <a href="https://github.com/mohammad-pro" target="_blank" rel="noreferrer" >
              <div className="w-8 h-8 rounded-xl border-[#616161] border-2 flex justify-center items-center hover:bg-[#EB5757] hover:border-[#EB5757] text-[#616161] hover:text-white transition-all duration-200 cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-4 h-4"
                >
                  {" "}
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                </svg>
              </div>
            </a>

            {/* <div className="w-8 h-8 rounded-xl border-[#616161] border-2 flex justify-center items-center hover:bg-[#EB5757] hover:border-[#EB5757] text-[#616161] hover:text-white transition-all duration-200 cursor-pointer">
              <span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.04946 0.607911H2.04907C1.9343 0.60782 1.82021 0.631105 1.71317 0.6769C1.60608 0.722712 1.50763 0.790388 1.42391 0.876925C1.34015 0.963498 1.27282 1.06722 1.22658 1.18258C1.18035 1.29792 1.15632 1.4221 1.15625 1.54791L2.04946 0.607911ZM2.04946 0.607911C2.16419 0.607911 2.27822 0.631282 2.38519 0.677156C2.49221 0.723048 2.59057 0.790795 2.67419 0.877389C2.75785 0.964019 2.82505 1.06778 2.87116 1.18316C2.91729 1.29857 2.94118 1.42281 2.94109 1.54864V1.549M2.04946 0.607911L2.94109 1.549M2.94109 1.549C2.94109 2.09073 2.51875 2.50427 2.04788 2.50427C1.57883 2.50427 1.15634 2.09158 1.15625 1.54809L2.94109 1.549ZM6.68506 5.68827H6.9911L7.13032 5.41573C7.38145 4.92413 7.89426 4.42609 8.84524 4.42609C9.93491 4.42609 10.4693 4.77875 10.7723 5.27113C11.1095 5.81918 11.226 6.63973 11.226 7.70718V11.6079H9.82388V8.20791V8.1974C9.82389 7.75473 9.82391 7.13226 9.62791 6.62004C9.52391 6.34826 9.3556 6.07968 9.08168 5.88196C8.80544 5.68257 8.46525 5.58664 8.07405 5.58664C7.69483 5.58664 7.35999 5.6635 7.08013 5.83342C6.7969 6.00539 6.60918 6.24892 6.48777 6.51445C6.26023 7.0121 6.24831 7.63599 6.24831 8.14191V11.6079H4.84617V4.59573H6.15132V5.18827V5.68827H6.65132H6.68506ZM2.75132 11.6079H1.3476V4.59518H2.75132V11.6079Z" />
                </svg>
              </span>
            </div> */}

            <a
              href="https://www.instagram.com/mohammad.frontend"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-8 h-8 rounded-xl border-[#616161] border-2 flex justify-center items-center hover:bg-[#EB5757] hover:border-[#EB5757] text-[#616161] hover:text-white transition-all duration-200 cursor-pointer">
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.7221 4.24651L13.7222 4.25742L13.7228 4.26831C13.7638 4.99373 13.764 5.2202 13.7655 7.1124L13.7655 7.11878C13.7655 7.11891 13.7655 7.11904 13.7655 7.11917C13.7655 9.01143 13.7558 9.2402 13.724 9.97668L13.7238 9.97667L13.7236 9.98858C13.7134 10.5147 13.6179 11.0321 13.4402 11.5225C13.2899 11.9221 13.0615 12.2839 12.7703 12.5852C12.4791 12.8865 12.1317 13.1208 11.7506 13.2742C11.2809 13.4563 10.7852 13.5543 10.2845 13.5646L10.2744 13.5648L10.2644 13.5654C9.56595 13.6077 9.34686 13.6079 7.51191 13.6079C5.684 13.6079 5.46374 13.5979 4.75224 13.565L4.75224 13.5649L4.74616 13.5647C4.24355 13.5476 3.7471 13.4419 3.27809 13.2518L3.27615 13.251C2.89393 13.0979 2.54549 12.8635 2.25364 12.5618C1.96235 12.2606 1.73388 11.8989 1.58371 11.4994C1.40589 11.0081 1.31039 10.4905 1.30021 9.96528L1.30003 9.95599L1.29951 9.94671C1.25845 9.22141 1.2583 8.99387 1.2583 7.09549C1.2583 5.20366 1.26802 4.97489 1.29984 4.23757L1.29999 4.23758L1.30022 4.22515C1.3098 3.70122 1.40574 3.18312 1.58367 2.69325C1.73358 2.29344 1.96191 1.93155 2.25317 1.63016C2.54428 1.32893 2.8918 1.09481 3.27304 0.941684C3.74273 0.759567 4.23839 0.661205 4.73911 0.650483L4.74864 0.650279L4.75815 0.649712C5.45689 0.608072 5.67627 0.60791 7.51116 0.60791C9.3395 0.60791 9.55958 0.617203 10.2701 0.650064L10.27 0.65022L10.2825 0.650485C10.7835 0.661128 11.2793 0.75948 11.7492 0.941655C12.1304 1.0949 12.4779 1.32908 12.769 1.63032C13.0603 1.93174 13.2887 2.29366 13.4387 2.69348C13.6193 3.18991 13.7152 3.71543 13.7221 4.24651ZM10.1808 2.43199L10.5404 2.77945L10.1808 2.43199C10.0602 2.55681 9.96539 2.70407 9.90099 2.86495C9.8366 3.0258 9.80366 3.19764 9.80366 3.3708C9.80366 3.52494 9.82956 3.67418 9.87749 3.81358C9.19793 3.2918 8.36785 3.00352 7.50666 3.00352C5.29888 3.00352 3.5391 4.84945 3.5391 7.09161C3.5391 9.33377 5.29888 11.1797 7.50666 11.1797C8.56454 11.1797 9.57549 10.7447 10.3181 9.97624C11.0602 9.20836 11.4742 8.17043 11.4742 7.09161C11.4742 6.20096 11.192 5.33817 10.676 4.63221C10.8116 4.68086 10.9582 4.70748 11.1122 4.70748C11.8509 4.70748 12.4201 4.09297 12.4201 3.3708C12.4201 3.19764 12.3871 3.0258 12.3227 2.86495C12.2583 2.70408 12.1635 2.55681 12.0429 2.43199C11.9222 2.30713 11.778 2.20715 11.6181 2.1386C11.4581 2.07004 11.2861 2.03451 11.1119 2.03451C10.9376 2.03451 10.7656 2.07004 10.6056 2.1386C10.4457 2.20715 10.3015 2.30714 10.1808 2.43199Z" />
                    <path d="M9.25881 7.09149C9.25881 8.11882 8.45825 8.92224 7.50636 8.92224C6.55447 8.92224 5.75391 8.11882 5.75391 7.09149C5.75391 6.06415 6.55447 5.26074 7.50636 5.26074C8.45825 5.26074 9.25881 6.06415 9.25881 7.09149Z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
