import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Social icons */}
        <div className="flex justify-center">
          <ul className="flex gap-5">
            <li className="social-item">
              <button type="button" aria-label="Facebook">
                <FacebookIcon fontSize="large" />
              </button>
            </li>

            <li className="social-item">
              <button type="button" aria-label="Instagram">
                <InstagramIcon fontSize="large" />
              </button>
            </li>

            <li className="social-item">
              <button type="button" aria-label="Twitter">
                <TwitterIcon fontSize="large" />
              </button>
            </li>

            <li className="social-item">
              <button type="button" aria-label="YouTube">
                <YouTubeIcon fontSize="large" />
              </button>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t text-center text-sm text-gray-500">
          © 2025 <span className="font-medium text-gray-700">An Thanh Food</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
